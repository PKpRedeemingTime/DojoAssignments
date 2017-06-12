var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Nineteen_Fifty_Fiver = mongoose.model('Nineteen_Fifty_Fiver');
module.exports = {
    index: function(req, res) {
        Nineteen_Fifty_Fiver.find({}, function(err, data) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },
    show: function(req, res) {
        Nineteen_Fifty_Fiver.find({name:req.params.name}, function(err, response) {
        if(err) {
            res.json(err);
        } else {
            res.json(response[0]);
        }
    })
    },
    create: function(req, res) {
        var nineteen_fifty_fiver = new Nineteen_Fifty_Fiver({name: req.params.name});
        nineteen_fifty_fiver.save(function(err, newUser) {
        if(err){
            res.json(err);
        } else {
            res.json(newUser);
        }
        })
    },
    destroy: function(req, res) {
        Nineteen_Fifty_Fiver.remove({name: req.params.name}, function(err, result) {
            if(err) {
                res.json(err);
            } else {
                Nineteen_Fifty_Fiver.find({}, function(err, data) {
                    if(err) {
                        res.json(err);
                    }
                    else {
                        res.json(data);
                    }
                })
            }
        })
    },
}