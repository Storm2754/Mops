var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Текст для нового мархрутизатора');
});

/* Страницы о мопсе */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });
    

module.exports = router;
