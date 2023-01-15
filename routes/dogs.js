
var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор');
});

/* Страница ведущих */
router.get('/:nick' , function(req, res, next) {
    db.query(`SELECT * FROM dogs WHERE dogs.nick = '${req.params.nick}'`, (err, dogs) => {
        if(err) {
        console.log(err);
        if(err) return next(err)
        }else {
            if(err) return next(err)
            if(dogs.lenght == 0) return next(new Error("Нет такого обьекта"))
            var dog = dogs[0];
            res.render('dog', {
                title: dog.title,
                picture: dog.avatar,
                desc: dog.about
                })
            }
        })
    })
    



module.exports = router;