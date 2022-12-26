
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Dog = require("./models/dog").Dog


var dog = new Dog({
title:"Мопся",
nick: "mopsic"//создание имени документа
})


console.log(dog)
dog.save(function(err, dog, affected){
    console.log(dog.title)
    })
    
