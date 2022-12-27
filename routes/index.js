var express = require('express')
var router = express.Router()
var Dog = require("../models/dog").Dog

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', menu:menu, counter:req.session.counter });
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
