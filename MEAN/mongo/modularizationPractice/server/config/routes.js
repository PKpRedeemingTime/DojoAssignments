var express = require('express');
var app = express();
var quotes = require('../controllers/quotes.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index')
  })
  app.get('/panther', function (req, res) {
    quotes.show(req, res)
  })
  app.post('/quotes', function(req,res){
    quotes.create(req, res)
  })
}