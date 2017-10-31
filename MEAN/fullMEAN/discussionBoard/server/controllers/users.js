var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = mongoose.model('User');
module.exports = {
    create: function(req,res){
        console.log("inside user controller create function")
        console.log(req.body)
        var user = new User(req.body);
        user.save(function(err, user){
            if(err){
                console.log(err)
                res.json(err)
            }
            console.log(user)
            res.json(user);   
        })
    },
}