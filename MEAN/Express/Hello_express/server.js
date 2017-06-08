var express = require('express');

// invoke var express and store the resulting application in var app
var app = express();

// app.HTTP_VERB('URL', function (req, res){});
// HTTP_VERB is either 'get' or 'post' etc...


// let's handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response){
    response.send('Hello Express');
})


// Tell the express app to listen on port 8000
app.listen(8000, function(){
    console.log('listening on port 8000');
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// Get users
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
