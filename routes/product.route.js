const express = require('express');
const router = express.Router();

//Get constroller for product from constroller folder

const product_controller = require('../controller/product.controller.js');
var validateMiddlewear = require('./Middlewears/RequestValidator');
const resultMiddleware = require('./Middlewears/ResultMiddleWare');
//simple test url 

router.use(validateMiddlewear.validateRequest);
router.get("/test",product_controller.test);
router.post("/create",product_controller.create_product);
router.use(resultMiddleware.MakeResultConsistenet);
module.exports = router;