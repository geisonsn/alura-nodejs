
module.exports = function(app) {
    app.get("/produtos", function(req, res) {
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        /*connection.query("select * from livros", function(err, result) {
            //res.send(result);
            res.render("produtos/lista", {lista : result});
        });*/

        produtosDAO.lista(function(err, result) {
            res.render("produtos/lista", {lista:result});
        });

        connection.end();

    });
}
