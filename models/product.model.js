
//Define product model schema for Mongo DB
var exports = module.exports = {};

const mongoose = require('mongoose');

const schema = mongoose.Schema;

delete mongoose.connection.models['productModel'];

const productModelSchema =  new schema({

            name:{type: String, required: [true, 'Name is required field']},
            price:{type: Number, required: [true, 'price is required field'] },
});

const Product = mongoose.model('productModel',productModelSchema);

exports.Product = Product;

// Export the model
// module.exports = mongoose.model('productModel',productModelSchema);
// module.exports = Product;