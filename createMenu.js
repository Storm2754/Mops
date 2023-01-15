
var Dog = require("./../models/dog").Dog

module.exports = function(req,res,next){
res.locals.nav = []


Dog.find(null,{_id:0,title:1,nick:1},function(err,result){
if(err) throwerr
res.locals.nav = result
next()
})
}
