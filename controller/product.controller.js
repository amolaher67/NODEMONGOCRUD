var productModel = require('../models/product.model');

//simple version of handler withour validationa and any other sanitation

exports.test= function(req,res){

    res.send('Greetings from the test controller');
}

exports.create_product = async function(req,res,next)
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
            console.log(err);
             
            res.status(500);
            res.send('Error Occured');
         
        }
        res.send('Product Created successfully')
        
    });

    next();
};