var express = require('express');
var app = express();
var panthers = require('../controllers/panthers.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    panthers.index(req, res);
  })
  app.get('/new', function(req, res) {
    panthers.new(req, res)
  })
  app.get('/:id/show', function (req, res) {
    panthers.show(req, res)
  })
  app.get('/:id/edit', function (req, res) {
    panthers.edit(req, res)
  })
  app.post('/panthers', function(req,res){
    panthers.create(req, res)
  })
  app.post('/:id', function(req,res){
    panthers.update(req, res)
  })
  app.post('/:id/delete', function(req,res){
    panthers.destroy(req, res)
  })
}