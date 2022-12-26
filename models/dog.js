//реализация модели Dog

var mongoose = require('mongoose')
var Schema = mongoose.Schema


var dogSchema = new Schema({
title:String,
nick: {
type:String,
unique:true,
required:true
},
avatar:String,
desc:String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Dog = mongoose.model("Dog", dogSchema)

