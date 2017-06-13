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
    console.log(socket.id);
    socket.on('send_user_name', function(data){
        users.push({id:socket.id, name:data.name});
        console.log(data);
        socket.emit('send_user_name', {response:users[users.length-1], all_users:users.map(function(x){
            return x.name
        })});
    });
    var names_arr = users.map(function(x){
        return x.name
    })
    socket.emit('send_user_name', {current_user: users[users.length-1], all_users: names_arr});
    socket.on('send_message', function(data){
        var sender = users.find(function(x){
            return x.id == data.sender;
        })
        data.sender = sender.name;
        console.log(data);
        io.emit('send_message', data) // send to all users
    })


    socket.on('disconnect', function(){
        var id = socket.id;
        var index = users.findIndex(function(x){
            return x.id == socket.id;
        });
        if(index){
            var names_arr = users.map(function(x){
                return x.name
            })
            users.splice(index, 1);
            io.emit('user_left', {users: names_arr})
        }
    })
});
