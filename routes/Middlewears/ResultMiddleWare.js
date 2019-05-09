let resultexports = module.exports = {};

resultexports.run = function(req,res,next)
{
    console.log(req);
    console.log(res);
    next();

}