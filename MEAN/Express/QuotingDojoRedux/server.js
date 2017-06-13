var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
// Mongoose connection, schema, model
mongoose.connect('mongodb://localhost/Quoting_Dojo');
var quote_schema = new mongoose.Schema({
    name: String,
    quote : String
})
var Quote = mongoose.model('quotes', quote_schema)


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})
app.get('/', function(req, res){
    Quote.find({}, function(err, results){
        if(err){
            console.log(err);
        }
        res.render('quotes', {quotes: results});
    });
})
app.post('/quuotes', function(req, res) {
    console.log("POST DATA", req.body);
    Quote.create(req.body, function(err){
        if(err){
            console.log(err);
        }
    });
    res.redirect('/quotes');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
