var productRepository= require('../Repository/productReposotory');

//simple version of handler withour validationa and any other sanitation

exports.test = function (req, res) {
    res.send('Greetings from the test controller');
}

exports.create_product = async function (req, res, next) {
    
    let product = new productRepository.Product(req);
    //save product and if any error get reurn from function
    product.SaveProduct(function (err) {
       // if (err) {
                 next()
        // } else {
        //     res.send('Product Created successfully')
        // }
    });

    //next();
}