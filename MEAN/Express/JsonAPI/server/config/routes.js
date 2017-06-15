var names = require('../controllers/names.js');

module.exports = function(app){
    app.get('/', function(req, res){
        res.json('index')
    })
    app.get('/new/:name', function(req, res){
        name.create(req, res)
    })

}
