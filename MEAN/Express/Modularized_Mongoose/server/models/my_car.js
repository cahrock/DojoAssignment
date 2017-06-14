var mongoose = require('mongoose')
var CarSchema = new mongoose.Schema({
    name: String,
    engine: Number,
    color: String
});

var Car = mongoose.model('Car', CarSchema);
