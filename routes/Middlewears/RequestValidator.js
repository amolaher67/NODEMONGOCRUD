var exports = module.exports = {};

exports.validateRequest = function PerformValidation(reqData,res,next)
{
     console.log(reqData);
     next();
};
