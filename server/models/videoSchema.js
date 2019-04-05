var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var videoSchema = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    at: Date,
    updated_at: Date
});

videoSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});

var Video = mongoose.model('Video', videoSchema);

module.exports = Video;