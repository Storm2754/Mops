var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/mops")
var User = require("./models/user.js").User

var first_user = new User({
    username: "admin",
    password: "1111"
})

first_user.save(function(err,user){
    if(err) throw err
    console.log(user)
})