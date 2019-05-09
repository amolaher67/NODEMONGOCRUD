
//Define product model schema for Mongo DB
var exports = module.exports = {};

const mongoose = require('mongoose');
const productModel = require('../models/product.model');

class Product
{
    constructor(reqData)
    {
      this.name = reqData.body.name;
      this.price = reqData.body.price;
    }
 
    productInstance()
    {
        let instance = new productModel.Product({
                                    name : this.name,
                                    price: this.price
                                  });
        return instance;
    }

    validateModel()
    {
        let error = this.productInstance().validateSync();
        if(error)
        {
           return error;      
        }
    }
    
    SaveProduct(callback)
    {    
        this.productInstance().save(function (err) {
            // if (err) {
            //     console.log(err);
            //     return err;
            // }
            callback(err);
        });
   }
}

exports.Product = Product;
// Export the model
// module.exports = mongoose.model('productModel',productModelSchema);
// module.exports = Product;