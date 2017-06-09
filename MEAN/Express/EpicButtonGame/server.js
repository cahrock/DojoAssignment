var express = require("express");
var path = require("path");
var app = express();
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

var io = require('socket.io').listen(server);
var counter = 0;
io.sockets.on('connection', function (socket) {
    socket.on("push_button", function (data){
        counter += 1;
        socket.emit('push_counter', {response: counter});
    })
    //resetting the counter into 0
    socket.on("reset_counter", function (data){
        counter = 0;
        socket.emit('reset_response', {response: counter});
    })
})
