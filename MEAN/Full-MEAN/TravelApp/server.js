const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = process.env.PORT || '8000';
const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public/dist')));
// ============= BE SURE TO CHANGE DATABASE NAME =======================
require('./server/config/mongoose.js')
//make sure to check the route file to make changes
require("./server/config/routes.js")(app);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.redirect('/')
});
app.listen(port, () => console.log(`API running on localhost:${port}`));



//
//
// var express = require('express'),
//     bodyParser = require('body-parser'),
//     port = 8000;
//
// var app = express();
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/client'));
// // app.use(express.static(__dirname + '/bower_components'));
//
// // Just a bit of middleware to print every route request to the console...
// app.use( function(req, res, next){
//   console.log(req.method, req.url);
//   next();
// });
//
// // ROUTES //////////////////////
// require('./server/config/routes.js')(app);
// ///////////////////////////////
//
// // MONGODB //////////////////////
// require('./server/config/mongoose.js');
// ///////////////////////////////
//
// app.listen(port, function(){
//   console.log(`Listening on ${port}`);
// });
