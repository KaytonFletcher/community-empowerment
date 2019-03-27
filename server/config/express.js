var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config')
    errorHandler = require('../helpers/errorHandler');
    usersRouter = require('../routes/userRoutes')
    authRoutes = require('../routes/authRoutes')


module.exports.init = function() {

mongoose.connect(config.db.uri,  {useMongoClient: true } );

//app initialization    
var app = express();

/***   here all the things the app uses will be defined (routes)   ***/

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware 
app.use(bodyParser.json());

//serving static files
app.use('/', express.static(__dirname + '/../../client'));
//app.use('/public', express.static(__dirname + '/../../public'));

// global error handler 
app.use(errorHandler);

//links to user factory in frontend
app.use('/api/users', usersRouter);

app.use('/api/auth', authRoutes);


//path resolution
app.use('*', function(req, res, next){
    console.log("RESOLVING PATH");
    console.log("resolve request: " + req.body);
    //resolving the path insured the directory was found, loading the index.html page
    console.log(path.resolve('client/index.html'));

    res.sendFile(path.resolve('client/index.html'));
    
  });

return app;

};