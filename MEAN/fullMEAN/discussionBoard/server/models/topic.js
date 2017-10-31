var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var TopicSchema = new mongoose.Schema({
    name: { type: String, required: true},
}, {timestamps: true });
var topic = mongoose.model('Topic', TopicSchema);