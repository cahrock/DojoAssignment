// require express
var express = require("express");
// bodyParser
var bodyParser = require('body-parser');
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

// POST
app.post('/result', function(req, res) {
    // submitted_info = {
    //     name: req.body.name,
    //     location: req.body.location,
    //     language: req.body.language,
    //     comment: req.body.comment
    // };
    submitted_info = req.body
    res.render("result",{data: submitted_info});
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
