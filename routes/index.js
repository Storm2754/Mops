var express = require('express')
var router = express.Router()
var Dog = require("../models/dog").Dog
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function(req, res, next) {
    Dog.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Hi!!!",
      res.cookie('greeting','Hi!!!').render('index', {
                              title: 'Express',
                              menu: menu,
                              counter: req.session.counter,
                          });
    })

});
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  }); 
  
  router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    User.findOne({username:username},function(err,user){
    if(err) return next(err)
    if(user){
    if(user.checkPassword(password)){
    req.session.user= user._id
    res.redirect('/')
                } else {
    res.render('logreg', {title:'Вход'})
                }
           } else {
    var user = newUser({username:username,password:password})
    user.save(function(err,user){
    if(err) return next(err)
    req.session.user= user._id
    res.redirect('/')
                })
    }
        })
    });
    



module.exports= router;



/*


  router.get('/history', function(req, res, next) {
    res.render('dog', {
    title: "История",
    picture: "images/history.jpg",
    desc: "История породы мопс окутана тайной. Дело в том, что император Древнего Китая Цинь Ши приказал уничтожить все архивные документы и изображения, которые повествовали о породе. Зачем это потребовалось – никогда не будет известно. Однако есть несколько версий происхождения этих собак, позволяющих получить примерное представление о том, откуда они все-таки пришли. "
    });
    });
    



router.get('/kinds', function(req, res, next) {
  res.render('dog', {
  title: "Виды",
  picture: "images/kinds.jpg",
  desc: "При разведении собак мопсов пытаются сохранить породные особенности. Но сейчас существует три разновидности: терьерный тип – более изящное телосложение, вытянутая шея бульдожий тип – толстые короткие лапы, широкое тело, немного выступающая нижняя челюсть шарпейный тип характеризуется обилием складок по всему телу"
  });
  });




  router.get('/common_features', function(req, res, next) {
    res.render('dog', {
    title: "Общие черты ",
    picture: "images/common_features.jpg",
    desc: "Мопс - порода собак родом из Китая, с физически отличительными чертами морщинистой, короткомордой мордой и завитым хвостом. Эта порода имеет тонкую глянцевую шерсть различных цветов, чаще всего светло-коричневую (палевую) или черную, и компактное квадратное тело с хорошо развитой мускулатурой."
    });
    });

    */

module.exports = router;
