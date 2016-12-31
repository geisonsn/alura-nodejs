
module.exports = function(app) {

    app.get("/produtos", function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, resultado) {
            if (erros) {
                return next(erros);
            }
            res.format({
                html : function() {
                    res.render("produtos/lista", {lista:resultado});
                }, 
                json : function() {
                    res.json(resultado);
                }
            });
        });
        connection.end();
    });

    /*
    app.get("/produtos/json", function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, resultado) {
            res.json(resultado);
        });
        connection.end();
    });
    */

    app.get("/produtos/form", function(req, res) {
       res.render("produtos/form", {errosValidacao : {}, produto : {}});
    });

    app.post("/produtos", function(req, res) {
        
        var produto = req.body;

        req.assert("titulo", "Título é obrigatório").notEmpty();
        req.assert("preco", "Formato inválido").isFloat();

        var erros = req.validationErrors();
        if (erros) {
           // res.render("produtos/form", {errosValidacao : erros, produto : produto});
            res.format({
                html : function() {
                    res.status(400).render("produtos/form", {errosValidacao:erros, produto:produto});
                }, 
                json : function() {
                    res.status(400).json(erros);
                }
            });

            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, resultado) {
            console.log(erros);
            res.redirect("/produtos");
        });
    });
}
