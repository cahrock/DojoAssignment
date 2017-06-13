// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var connection = mongoose.connect("mongodb://localhost/Car");

// Create Car schema and attach it as a model to our database
var CarSchema = new mongoose.Schema({
    name: String,
    engine: Number,
    color: String
});

var Car = mongoose.model('Car', CarSchema);

// Display all
app.get('/', function(req, res){
  Car.find({}, function(err, results){
        if (err) { console.log(err);
      }
    res.render('index', { cars: results });
    console.log(results);
  });
});

// Display a New FORM
app.get('/create', function(req, res){
  res.render('create');
});

// Create a new Car
app.post('/create', function(req, res){
  Car.create(req.body, function(err){
      if (err) { console.log(err);
    }
    res.redirect('/')
  });
});

// Display the car that want to be editted
app.get('/edit/:id/', function(req, res){
  Car.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err);
    }
    res.render('edit', { car: response[0] });
  })
});

// Display a Car => Id
app.get('/show/:id', function(req, res){
  Car.find({ _id: req.params.id }, function(err, response) {
        if (err) { console.log(err);
      }
    res.render('show', { car: response[0] });
  });
});

// Update Car => id
app.post('/:id', function(req, res){
  Car.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err);
    }
    res.redirect('/');
  });
});

// Delete Car => Id
app.post('/delete/:id', function(req, res){
  Car.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err);
    }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
})
