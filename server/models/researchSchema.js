var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var researchSchema = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
		required:true,
        trim: true
    },
    url: {
        type: String,
        unique: true,
        trim: true
    },
    at: Date,
    updated_at: Date
});

researchSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
});

var Research = mongoose.model('Research', researchSchema);

module.exports = Research;