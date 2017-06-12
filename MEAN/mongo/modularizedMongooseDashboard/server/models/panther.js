var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var PantherSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    age: { type: Number, required: true, min: 0, max: 75 },
}, {timestamps: true });
var panther = mongoose.model('Panther', PantherSchema);