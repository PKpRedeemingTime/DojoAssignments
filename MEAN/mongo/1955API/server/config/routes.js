var express = require('express');
var app = express();
var nineteen_fifty_fivers = require('../controllers/nineteen_fifty_fivers.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    nineteen_fifty_fivers.index(req, res);
  })
  app.get('/new/:name', function(req, res) {
    nineteen_fifty_fivers.create(req, res)
  })
  app.get('/remove/:name', function (req, res) {
    nineteen_fifty_fivers.destroy(req, res)
  })
  app.get('/:name', function (req, res) {
    nineteen_fifty_fivers.show(req, res)
  })
}