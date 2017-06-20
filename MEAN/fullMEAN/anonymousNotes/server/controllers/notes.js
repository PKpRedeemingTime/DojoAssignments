var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Note = mongoose.model('Note');
module.exports = {
    index: function(req, res) {
        Note.find({}, function(err, notes) {
            if(err) {console.log(err)};
            res.json(notes);
        })
    },
    create: function(req,res) {
        var note = new Note(req.body);
        note.save(function(err) {
            if(err) {
                console.log('something went wrong');
                res.json(note.errors);
            }
            else {
                res.redirect('/notes');
            }
        })
    }
}