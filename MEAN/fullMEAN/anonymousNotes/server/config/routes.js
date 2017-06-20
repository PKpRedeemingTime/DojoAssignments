var notes = require('../controllers/notes.js');
module.exports = function(app) {
  app.get('/notes', function(req, res) {
    notes.index(req, res);
  })
  app.post('/notes', function(req,res){
    notes.create(req, res)
  })
}