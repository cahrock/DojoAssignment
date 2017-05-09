var express = require('express');
// create an instance of express
var app = express();

// for development purpose port 5000
var port = 5000;

// create 'public' & 'src/views' directory as static directory
app.use(express.static('public'));
app.use(express.static('src/views'));

// for home
app.get('/', function(req, res){
    res.send('Hello world');
});

// books
app.get('/books', function(req, res){
    res.send('Hello books');
});

app.listen(port, function(err){
 console.log('running server on port ' + port);
});
