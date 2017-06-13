var express = require("express");
var path = require("path");
var app = express();
// var server = require('http').createServer();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// index page
app.get('/', function(req, res) {
 res.render("index");
})
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// })

var users= [];
var connections = [];
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected %s sockeds connected', connections.length);
    // disconnect
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected  %s sockeds connected', connections.length);
});
