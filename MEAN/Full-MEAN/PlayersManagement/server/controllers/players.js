console.log("players controller")
var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    show: function(req, res){
        console.log('Controllers show all');
      Player.find({}, function(err, results){
            if (err) { console.log(err);
          }
        res.json(results);
        console.log(results);
    });
  },
    // var player = new Player(req.body);
    create: function(req, res){
        console.log("inside controller create function")
        console.log(req.body)

        var player = new Player(req.body);
          player.save(function(err, player){
              if (err) {
                  console.log(err, "==========")
                  res.json(err)
            }
            console.log(player, "===========")
            res.json(player)
          });
  },
    delete: function(req, res){
        console.log("inside controller delete function")
        console.log(req.params.id)
        Player.findByIdAndRemove(req.params.id, (err, player)=>{
          if(err){
              console.log(err, "==========")
              res.json(err)
          }
          console.log(player, "===========")
          res.json(player);
      })
    }  
  }
  //
  //   display_acar_edit: function(req, res){
  //         Car.find({ _id: req.params.id }, function(err, response) {
  //             if (err) { console.log(err);
  //           }
  //           res.render('edit', { car: response[0] });
  //         })
  //     },
  //
  //   show_acar: function(req, res){
  //     Car.find({ _id: req.params.id }, function(err, response) {
  //           if (err) { console.log(err);
  //         }
  //       res.render('show', { car: response[0] });
  //     });
  // },
  //
  //   update: function(req, res){
  //     Car.update({ _id: req.params.id }, req.body, function(err, result){
  //         if (err) { console.log(err);
  //       }
  //       res.redirect('/');
  //     });
  // },
  //

// }
