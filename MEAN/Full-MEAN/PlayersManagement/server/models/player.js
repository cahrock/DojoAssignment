var mongoose = require('mongoose')
var PlayerSchema = new mongoose.Schema({
    name: String,
    position: String
}, {timestamps: true});

var Player = mongoose.model('Player', PlayerSchema);
