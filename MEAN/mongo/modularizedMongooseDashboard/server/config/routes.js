var express = require('express');
var app = express();
var panthers = require('../controllers/panthers.js');
module.exports = function(app) {
  app.get('/panthers', function(req, res) {
    console.log("inside my routes");
    panthers.index(req, res);
  })
  app.get('/panthers/new', function(req, res) {
    panthers.new(req, res)
  })
  app.get('/panthers/:id/show', function (req, res) {
    panthers.show(req, res)
  })
  app.get('/panthers/:id/edit', function (req, res) {
    panthers.edit(req, res)
  })
  app.post('/panthers', function(req,res){
    panthers.create(req, res)
  })
  app.post('/panthers/:id', function(req,res){
    panthers.update(req, res)
  })
  app.post('/panthers/:id/delete', function(req,res){
    panthers.destroy(req, res)
  })
}