var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var NoteSchema = new mongoose.Schema({
    content:  { type: String, required: true, minlength: 3},
}, {timestamps: true });
var note = mongoose.model('Note', NoteSchema);