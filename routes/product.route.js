const express = require('express');
const router = express.Router();

//Get constroller for product from constroller folder

const product_controller = require('../controller/product.controller.js');

//simple test url 

router.get("/test",product_controller.test);
router.post("/create",product_controller.create_product);

module.exports = router;