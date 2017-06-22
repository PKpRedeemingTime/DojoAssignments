var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = mongoose.model('User');
module.exports = {

    create: function(req,res) {
        var user = new User(req.body);
        user.save(function(err) {
            if(err) {
                console.log('something went wrong');
                res.json(err);
            }
            else {
                res.redirect('/');
            }
        })
    },

    success: function(req,res) {
        User.find({}, function(err, users) {
            if(err) {console.log(err)};
            res.json(users);
        })
    }
    
}