let testexports = module.exports = {};

testexports.MakeResultConsistenet = function(req,res,next)
{
    console.log(res);
    next();

}