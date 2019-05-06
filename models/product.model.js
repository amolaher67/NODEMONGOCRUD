
//Define product model schema for Mongo DB

const mongoose = require('mongoose');

const schema = mongoose.Schema;

let productModelSchema = new schema({
        name:{type :String ,required:true,max:100},
        price:{type:Number,required:true},
    });

// Export the model
module.exports = mongoose.model('productModel',productModelSchema);