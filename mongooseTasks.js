//для изучения Momgoose  

var mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema= mongoose.Schema({ name: String})

schema.methods.meow= function(){
console.log(this.get("name") + "сонная собака")
}

var Dog= mongoose.model('Dog', schema)

var puppy= new Dog({ name: 'Мягкая '})
puppy.save(function(err) {
    puppy.meow()
})
