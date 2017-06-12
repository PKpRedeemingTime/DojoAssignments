var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = mongoose.model('User');
module.exports = {
  show: function(req, res) {
    User.find({}, function(err, users) {
      res.render('quotes', {users: users});
    })
  },
  create: function(req, res) {
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/quotes');
      }
    })
  }
}