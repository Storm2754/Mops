var express = require('express');
var router = express.Router();
var Dog = require("../models/dog").Dog
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор');
});

/* Страница ведущих */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
                Dog.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
                Dog.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var dog = result[0]
          var dogs = result[1] || []
          if(!dog) return next(new Error("Нет такой страницы"))
          res.render('dog', {
              title: dog.title,
              picture: dog.avatar,
              desc: dog.desc,
              menu: dogs
          });
      })
})




module.exports = router;