module.exports = function(app) {
    app.get('/promocoes/form', function(req,res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, resultado) {
            res.render('promocoes/form', {lista: resultado});
        });
        connection.end();
    });
    app.post('/promocoes', function(req,res) {
        var promocao = req.body;
        console.log(promocao);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.get(promocao.livro.id, function(erros, rows) {
            var produto = rows[0];
            //console.log(produto);
            promocao.livro = produto;
            app.get('io').emit('novaPromocao', promocao);
            res.redirect('promocoes/form');
        });
    });
};
