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
    if (process.env.NODE_ENV == 'production') {
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        
        var user = grupos[1],
            password = grupos[2],
            host = grupos[3],
            database = grupos[4];
             
        return  mysql.createConnection({            
            host : host,
            user : user,
            password : password,
            database : database
        });
    }
 };

module.exports = function() {
    return connectMySQL;
}

