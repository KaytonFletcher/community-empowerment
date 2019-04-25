var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var announcementSchema = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    updated_at: Date
});

announcementSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});

var Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;