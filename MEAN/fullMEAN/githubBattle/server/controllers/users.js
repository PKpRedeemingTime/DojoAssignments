var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = mongoose.model('User');
module.exports = {
    index: function(req, res) {
        
    },
    create: function(req,res) {
        var user = new User(req.body.login, (req.body.public_repos+req.body.followers)*12, req.body.avatar_url);
        console.log(user);
        user.save(function(err) {
            if(err) {
                console.log('something went wrong');
                res.json(user.errors);
            }
            else {
                res.redirect('/');
            }
        })
    }
}