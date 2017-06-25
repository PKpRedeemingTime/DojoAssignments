var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Product = mongoose.model('Product');
module.exports = {
    create: function(req,res){
        console.log("inside controller create function")
        console.log(req.body)
        var product = new Product(req.body);
        product.save(function(err, product){
            if(err){
                console.log(err, "==========")
                res.json(err)
            }
            console.log(product, "===========")
            res.json(product);   
        })
    },

    index: function(req,res){
        console.log("inside controller index function")
        Product.find({}, (err, products)=>{
        console.log(products)
        res.json(products);        
        })
    },
}