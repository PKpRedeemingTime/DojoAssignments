var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
}, {timestamps: true });
var user = mongoose.model('User', UserSchema);