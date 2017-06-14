// Dependencies
var express = require('express'),
    path = require("path"),
    bodyParser = require('body-parser'),
    port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')))
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// routes_setter(app);

app.listen(port, function(){
  console.log("Running on ", port);
})
