var users = require('../controllers/users.js');
module.exports = function(app) {
  app.get('/success', function(req, res) {
    users.success(req, res);
  })
  app.post('/user', function(req,res){
    users.create(req, res)
  })
}