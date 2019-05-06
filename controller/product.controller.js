

var productModel = require('../models/product.model');

//simple version of handler withour validationa and any other sanitation

exports.test= function(req,res){

    res.send('Greetings from the test controller');
}

exports.create_product = async function(req,res)
{
    let product = new productModel(
    {
        name : req.body.name,
        price: req.body.price
    });

   // res.send('Product Created successfully')

    await product.save(function (err) {
        if (err) {
            //return next(err);
        }
        res.send('Product Created successfully')
    })
};