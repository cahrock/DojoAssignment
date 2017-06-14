var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// // Express basic setup
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Api_Demo');
var Schema = mongoose.Schema;
// Message Schema
var ApiSchema = new Schema({
    name: {type: String, required: true, minlength:4},
}, {timestamps: true});

var Name = mongoose.model('Name', ApiSchema);

app.get('/', function(req, res){
    Name.find({}, function(err, results){
          if (err) { console.log(err);
        }
        res.json(results);
      console.log(results);
    })
})


app.get('/new/:name', function(req, res){
    var people = new Name({name: req.params.name});
    people.save(function(err, newUser){
        if(err){
            res.json(err)
            console.log(err);
        }
        else {
            res.json(newUser)
            console.log(newUser);
        }
    })
})

app.listen(8000, function() {
 console.log("listening on port", port);
});
