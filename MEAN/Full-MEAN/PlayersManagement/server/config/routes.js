// var mongoose = require('mongoose');
// var Player = mongoose.model('Player');
console.log('routes');
var players = require('../controllers/players.js')



module.exports = function(app){
    // Display all
    app.get('/players', function (req, res) {
        console.log("hit my get /players")
        players.show(req, res)
  });

    // Create a new Car
    app.post('/players',function(req, res){
        console.log("hit my post /players");
        console.log(req.body)
        players.create(req, res)
    });

    // Display the car that want to be editted
    app.delete('/players/:id/',function(req, res){
        console.log("hit my delete /players/:id");
        console.log(req.params.id)
        players.delete(req, res)
    });

    // app.get('/players/:id', players.show);
      // app.put('/players/:id', players.update);
      // app.delete('/players/:id', players.delete);
}
