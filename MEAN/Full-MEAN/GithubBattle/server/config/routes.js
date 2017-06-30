var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var notes = require('../controllers/notes.js')

module.exports = function(app){
    // Display all
    app.get('/notes', function (req, res) {
    notes.show(req, res)
  })

    // Create a new Car
    app.post('/notes',function(req, res){
      notes.create_new(req, res)
    })

    // Display the car that want to be editted
    app.get('/edit/:id/',function(req, res){
      notes.display_acar_edit(req, res)
    })

    // Display a Car => Id
    app.get('/show/:id',function(req, res){
      notes.show_acar(req, res)
    })

    // Update Car => id
    app.post('/:id',function(req, res){
      notes.update(req, res)
    })

    // Delete Car => Id
    app.post('/delete/:id',function(req, res){
      notes.dalete(req, res)
    })
}
