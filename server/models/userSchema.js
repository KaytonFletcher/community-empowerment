var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String, 
        required: false,
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String,
        required: true, 
    },
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;