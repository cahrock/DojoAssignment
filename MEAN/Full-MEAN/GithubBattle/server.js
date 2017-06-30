var express = require('express'),
    path = require("path"),
    bodyParser = require('body-parser'),
    port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())// this line allows for json to be received front-end --> server
app.use(express.static(path.join(__dirname, './public/dist')))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// routes_setter(app);

app.get('*', function(req, res){
    res.sendFile(path.resolve('./dist/index.html'))
})

app.listen(port, function(){
  console.log("Running on ", port);
})
