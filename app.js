var app = require("./config/express")();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('io', io);

server.listen(3000, function(){
    console.log("servidor rodando");
});
