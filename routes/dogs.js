var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Текст для нового мархрутизатора');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
    Dog.findOne({nick:req.params.nick}, function(err,dog){
    if(err) returnnext(err)
    if(!dog) returnnext(newError("Нет такой страницы"))
    res.render('dog', {
    title: dog.title,
    picture: dog.avatar,
    desc: dog.desc
    })
        })
    })
    
    

module.exports = router;
