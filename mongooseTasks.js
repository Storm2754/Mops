//для изучения Momgoose  

var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Dog = mongoose.model('Dog', { name: String })

var puppy = new Dog({ name: 'Мягкость'})
puppy.save(function (err) {
if (err) {
console.log(err)
    } else {
console.log('Гаф')
    }
})
