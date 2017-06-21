var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    score: Number,
    profilePic: String,
}, {timestamps: true });
var user = mongoose.model('User', UserSchema);