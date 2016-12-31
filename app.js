var app = require("./config/express")();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('io', io);

var port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log("servidor rodando");
});
