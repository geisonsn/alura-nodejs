
module.exports = function(app) {
    app.get("/produtos", function(req, res) {
        
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

        /*connection.query("select * from livros", function(err, result) {
            //res.send(result);
            res.render("produtos/lista", {lista : result});
        });*/

        produtosBanco.lista(function(err, result) {
            res.render("produtos/lista", {lista:result});
        });

        connection.end();

    });
}
