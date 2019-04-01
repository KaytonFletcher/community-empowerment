var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String, 
        required: true,
    }, 
    date: {
        type: Date, 
        required: true
    },
    startTime: {
        type: String,
        required: true, 
    },
    endTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;