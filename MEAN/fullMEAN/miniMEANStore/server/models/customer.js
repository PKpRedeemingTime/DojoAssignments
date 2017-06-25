var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique:true},
}, {timestamps: true });
var customer = mongoose.model('Customer', CustomerSchema);