var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config')
    errorHandler = require('../helpers/errorHandler');


module.exports.init = function() {

app = express();

//here all the things the app uses will be defined (routes)


// global error handler 
app.use(errorHandler);




return app;

};