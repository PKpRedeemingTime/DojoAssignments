var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var PostSchema = new mongoose.Schema({
    name: { type: String, required: true},
}, {timestamps: true });
var post = mongoose.model('Post', PostSchema);