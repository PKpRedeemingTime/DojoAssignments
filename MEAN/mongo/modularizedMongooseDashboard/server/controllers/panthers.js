var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Panther = mongoose.model('Panther');
module.exports = {
    index: function(req, res) {
        Panther.find({}, function(err, panthers) {
            console.log(err);
            res.render('index',{ panthers:panthers });
        })
    },
    new: function(req, res) {
        Panther.find({}, function(err, panthers) {
            res.render('new');
        })
    },
    show: function(req, res) {
        Panther.find({_id:req.params.id}, function(err, panther) {
        if(err) {
            console.log('something went wrong');
        } else {
            res.render('show',{ panther:panther[0] });
        }
    })
    },
    edit: function(req, res) {
        Panther.find({_id:req.params.id}, function(err, panther) {
        if(err) {
            console.log('something went wrong');
        } else {
            res.render('edit',{ panther:panther[0] });
        }
    })
    },
    create: function(req, res) {
        var panther = new Panther({name: req.body.name, age: req.body.age});
        panther.save(function(err) {
        if(err){
            console.log("something went wrong");
            res.json(panther.errors)
        } else {
            res.redirect('/');
        }
        })
    },
    update: function(req, res) {
        Panther.update({_id: req.params.id}, req.body, function(err, result) {
            if(err) {
                console.log(err);
            } else {
            res.redirect('/panthers/' + req.params.id + '/show');
            }
        })
    },
    destroy: function(req, res) {
        Panther.remove({_id: req.params.id}, function(err, result) {
            if(err) {
                console.log(err);
            } else {
            res.redirect('/');
            }
        })
    },
}