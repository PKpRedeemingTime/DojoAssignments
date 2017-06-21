var users = require('../controllers/users.js');
module.exports = function(app) {
  app.get('/battle', function(req, res) {
    users.index(req, res);
  })
  app.post('/users', function(req,res){
    users.create(req, res)
  })
}