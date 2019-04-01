var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    }, 
    date: {
        type: String, 
        required: true
    },
    startTime: {
        type: String,
        required: true, 
        trim: true
    },
    endTime: {
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
        type: Number, 
        required: true
    },
    created_at: Date,
    updated_at: Date
});

eventSchema.pre('save', function(next) {
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