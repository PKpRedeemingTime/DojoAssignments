var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var ProductSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    quantity: { type: Number, required: true},
}, {timestamps: true });
var product = mongoose.model('Product', ProductSchema);