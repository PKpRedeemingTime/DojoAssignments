var players = require('../controllers/players.js');
var mongoose = require('mongoose');
module.exports = function(app) {
  app.get('/', function(req, res) {
    players.index(req, res);
  })
  // app.post('/user', function(req,res){
  //   players.create(req, res)
  // })
}