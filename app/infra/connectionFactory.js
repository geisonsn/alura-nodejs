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
   return  mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "casadocodigo_nodejs"
    });
}

module.exports = function() {
    return connectMySQL;
}

