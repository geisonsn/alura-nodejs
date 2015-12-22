
module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err, result) {
            res.render("produtos/lista", {lista:result});
        });
        connection.end();
    }; 

    app.get("/produtos", listaProdutos);

    app.get("/produtos/form", function(req, res) {
       res.render("produtos/form");
    });

    app.post("/produtos", function(req, res) {
        
        var produto = req.body;
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, resultado) {
            res.redirect("/produtos");
        });
    });
}
