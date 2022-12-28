var express = require('express');
var router = express.Router();

var Dog = require("../models/dog").Dog
var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор');
});

/* Страницы о мопсе */
router.get('/:nick' ,checkAuth, function(req, res, next) {
  Dog.findOne({nick:req.params.nick}, function(err,dog){
        if(err) return next(err)
        if(!dog) return next(new Error("Нет такого ведущего для поиска"))
        res.render('dog', {
            title: dog.title,
            picture: dog.avatar,
            desc: dog.desc
        })
    })
})




module.exports = router;