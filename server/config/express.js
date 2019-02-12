var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use('/', express.static(__dirname + '/../../client'));
  app.use('/public', express.static(__dirname + '/../../public'));

  /**TODO 
  Use the listings router for requests to the api */
  //referencing listingFactory.js in the frontend -> /api/listings
  //will call defined methods exported in routes file
  app.use('/api/listings', listingsRouter);
  

  /**TODO 
  Go to homepage for all routes not specified */ 

  //asterisk specifies all directories
  app.all('/*', function(req, res){

    //resolving the path insured the directory was found, loading the index.html page
    res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};  