var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var requestSchema = new Schema({
    subject: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    userID: {
        type: String, 
        required: true,
        trim: true
    },
    userName: {
        type: String, 
        required: true,
        trim: true
    },
    updated_at: Date
});

requestSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});

var Request = mongoose.model('Request', requestSchema);

module.exports = Request;