var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var CommentSchema = new mongoose.Schema({
    name: { type: String, required: true},
}, {timestamps: true });
var comment = mongoose.model('Comment', CommentSchema);