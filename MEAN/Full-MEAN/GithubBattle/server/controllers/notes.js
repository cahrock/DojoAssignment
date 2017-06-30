var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function(req, res){
        console.log('Controllers show all');
      Note.find({}, function(err, results){
            if (err) { console.log(err);
          }
        res.json(results);
        console.log(results);
    });
  },
  
    create_new: function(req, res){
        console.log('Controller create');
      Note.create(req.body, function(err){
          if (err) { console.log(err);
        }
        res.redirect('/notes')
      });
  },
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
  //   delete: function(req, res){
  //     Car.remove({ _id: req.params.id }, function(err, result){
  //         if (err) { console.log(err);
  //       }
  //       res.redirect('/');
  //     });
  // },
}
