var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    quote: { type: String, required: true, maxlength: 100 },
}, {timestamps: true });
var User = mongoose.model('User', UserSchema);