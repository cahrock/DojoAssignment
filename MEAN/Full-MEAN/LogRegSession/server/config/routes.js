//make sure to check controllers for changes
console.log('routes');
var users = require('../controllers/users.js')
module.exports = function(app){
    app.post('/users', (req,res)=>{
        console.log("inside routes")
        console.log(req.body)
        users.create(req, res);
    })
    app.post('/login', (req,res)=>{
        console.log("inside routes")
        console.log(req.body)
        users.login(req, res)
    })
}