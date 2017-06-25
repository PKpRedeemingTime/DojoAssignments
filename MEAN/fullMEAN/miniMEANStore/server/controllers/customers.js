var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Customer = mongoose.model('Customer');
module.exports = {
    create: function(req,res){
        console.log("inside controller create function")
        console.log(req.body)
        var customer = new Customer(req.body);
        customer.save(function(err, customer){
            if(err){
                console.log(err, "==========")
                res.json(err)
            }
            console.log(customer, "===========")
            res.json(customer);   
        })
    },

    index: function(req,res){
        console.log("inside controller index function")
        Customer.find({}, (err, customers)=>{
        console.log(customers)
        res.json(customers);        
        })
    },

    delete: function(req,res){
        console.log("inside controller delete function");
        console.log(req.params.id)
        Customer.findByIdAndRemove(req.params.id, (err,customer) => {
            if(err) {
                console.log(err);
                res.json(err);
            }
            res.json(customer);
        })
    },
}