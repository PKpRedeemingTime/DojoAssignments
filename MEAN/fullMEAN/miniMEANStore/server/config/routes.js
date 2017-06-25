var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
module.exports = function(app) {
  app.post('/customers', function(req, res){
    console.log("hit my post /customers");
    console.log(req.body)
    customers.create(req, res)
  });
  app.get('/customers', function(req, res){
    console.log("hit my get /customers");
    customers.index(req, res)
  });
  app.delete('/customers/:id', function(req, res){
    console.log("hit my delete /customers");
    console.log(req.params.id);
    customers.delete(req, res);
  });
  app.post('/products', function(req, res){
    console.log("hit my post /products");
    console.log(req.body)
    products.create(req, res)
  });
  app.get('/products', function(req, res){
    console.log("hit my get /products");
    products.index(req, res)
  });
}