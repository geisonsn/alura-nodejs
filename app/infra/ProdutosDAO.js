function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query("select * from livros", callback);
}


module.exports = function() {
    /*return function(connection) {
        this.lista = function(callback) {
            connection.query("select * from livros", callback);
        }
        return this;
    }*/
    return ProdutosDAO;
}
