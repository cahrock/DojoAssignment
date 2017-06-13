var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Express basic setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './views'));

mongoose.connect('mongodb://localhost/Api_Demo');
var Schema = mongoose.Schema;
// Message Schema
var ApiSchema = new Schema({
    name: {type: String, required: true, minlength:4},
}, {timestamps: true});

var Name = mongoose.model('Name', ApiSchema);

app.get('/', function(req, res){

    res.json();
})

app.get('/new/:name', function(req, res){
    Name.create(req.body, function(err, results){
        if(err){
            console.log(err);
        };
    })
    res.redirect('/');
})

app.listen(8000, function() {
 console.log("listening on port", port);
});
