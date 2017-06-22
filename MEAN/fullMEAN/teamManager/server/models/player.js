var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    name:String,
    position:String,
})
var player = mongoose.model('Player', PlayerSchema);