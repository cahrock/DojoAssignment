var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); 
var UserSchema = new mongoose.Schema({
    email: {type:String, required:true, validate: 
        {
          validator: function(value) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
          },
          message: '{VALUE} is not a valid email address!'
        }
    },
    first_name: String,
    last_name: String,    
    password: String,
    birthday: Date
})
UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
UserSchema.methods.lowerCaseAll = function(){
    this.last_name = this.last_name.toLowerCase()
    this.first_name = this.first_name.toLowerCase()
}
UserSchema.pre('save', function(done){
    this.password = this.generateHash(this.password);
    done()
})
mongoose.model('User', UserSchema)

