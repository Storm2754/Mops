var express = require('express');
var router = express.Router();

/* код для страниц */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница истории */ 
  
  router.get('/history', function(req, res, next) {
    res.send("<h1>История</h1>")
  
    });
    

/* Страница видов */ 
router.get('/kinds', function(req, res, next) {
  res.send("<h1>Виды</h1>")

  });



  /* Страница общие черты */ 
  router.get('/common_features', function(req, res, next) {
    res.send("<h1>Общие черты</h1>")
  
    });
 


module.exports = router;
