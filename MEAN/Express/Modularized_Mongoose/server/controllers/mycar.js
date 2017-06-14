var mongoose = require('mongoose');
var Car = mongoose.model('Car');

module.exports = {
    show_all: function(req, res){
      Car.find({}, function(err, results){
            if (err) { console.log(err);
          }
        res.render('index', { cars: results });
        console.log(results);
      });
  },

    display_new_form: function(req, res){
      res.render('create')},

    create_new: function(req, res){
      Car.create(req.body, function(err){
          if (err) { console.log(err);
        }
        res.redirect('/')
      });
  },

    display_acar_edit: function(req, res){
          Car.find({ _id: req.params.id }, function(err, response) {
              if (err) { console.log(err);
            }
            res.render('edit', { car: response[0] });
          })
      },

    show_acar: function(req, res){
      Car.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err);
          }
        res.render('show', { car: response[0] });
      });
  },

    update: function(req, res){
      Car.update({ _id: req.params.id }, req.body, function(err, result){
          if (err) { console.log(err);
        }
        res.redirect('/');
      });
  },

    delete: function(req, res){
      Car.remove({ _id: req.params.id }, function(err, result){
          if (err) { console.log(err);
        }
        res.redirect('/');
      });
  },
}
