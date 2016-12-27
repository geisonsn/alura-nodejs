var mysql = require("mysql");

/*
 module.exports = function() {
   console.log("abrindo a conexao");
   return  mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "casadocodigo_nodejs"
    });
}
*/

var connectMySQL = function() {
    if (!process.env.NODE_ENV) {
        return  mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "root",
            database : "casadocodigo_nodejs"
        });
    }
    if (process.env.NODE_ENV == 'test') {
        return  mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "root",
            database : "casadocodigo_nodejs_test"
        });
    }
 };

module.exports = function() {
    return connectMySQL;
}

