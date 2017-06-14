var mycars = require('../controllers/mycar.js');

module.exports = function(app){
    // Display all
    app.get('/main', function (req, res) {
    quotes.show(req, res)
  })
    app.get('/', function(req, res){
        mycars.show_all(req, res)
    })

    // Display a New FORM
    app.get('/create', function(req, res){
      mycars.display_new_form(req, res)
    })

    // Create a new Car
    app.post('/create',function(req, res){
      mycars.create_new(req, res)
    })

    // Display the car that want to be editted
    app.get('/edit/:id/',function(req, res){
      mycars.display_acar_edit(req, res)
    })

    // Display a Car => Id
    app.get('/show/:id',function(req, res){
      mycars.show_acar(req, res)
    })

    // Update Car => id
    app.post('/:id',function(req, res){
      mycars.update(req, res)
    })

    // Delete Car => Id
    app.post('/delete/:id',function(req, res){
      mycars.dalete(req, res)
    })
}
