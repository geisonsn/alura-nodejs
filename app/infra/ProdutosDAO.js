function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.get = function(id, callback) {
    this._connection.query("select * from livros where id = ?", id, callback);
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query("select * from livros", callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._connection.query("insert into livros set ?", produto, callback);
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
