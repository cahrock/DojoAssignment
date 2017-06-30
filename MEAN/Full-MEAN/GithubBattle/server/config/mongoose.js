var mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')

// Create Database name
mongoose.connect("mongodb://localhost/DatabaseName");
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});