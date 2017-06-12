var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Nineteen_Fifty_FiverSchema = new mongoose.Schema({
    name:  { type: String, required: true},
}, {timestamps: true });
var nineteen_fifty_fiver = mongoose.model('Nineteen_Fifty_Fiver', Nineteen_Fifty_FiverSchema);