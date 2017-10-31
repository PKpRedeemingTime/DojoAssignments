var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/topics.js');
var comments = require('../controllers/comments.js');
module.exports = function(app) {
  app.post('/users', function(req, res){
    console.log("hit my post /users");
    console.log(req.body)
    users.create(req, res)
  });
}