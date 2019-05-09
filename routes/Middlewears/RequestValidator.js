var exports = module.exports = {};
var productModel = require('../../Repository/productReposotory');

exports.validateRequest = function PerformValidation(reqData,res,next)
{
     let isValidrequset = true;
     //Check Reqest object is exist or not
     if(reqData == undefined && reqData == null)
     {
          res.status(400);
          res.send("Bad request : request is invalid or missing");
          SetValidationFlag(false);
     }
     
     //Validate Mongoose Schema Object Before Sending to data base,if thr is any error with validation we will catch here 
     //for each object, we are not going to handle validation at controller level
     var validationresult = new productModel.Product(reqData).validateModel();
     if(validationresult)
     {
          console.log(validationresult);
          res.status(400);
          res.send(validationresult);
          SetValidationFlag(false);
     }

     //if All is OK Then we are sending it to Actual controller method to perfomr operation 
     if(isValidrequset == true)
       next();
     
     function SetValidationFlag(val)
     {
          isValidrequset = val;
     }
};



