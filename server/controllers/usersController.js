var User = require('../models/userSchema.js');
var mongoose = require('mongoose');

exports.list = function(req, res) {
    /** TODO **/
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all users
    // .sort() returns alphabetically by default
    User.find().sort('name').then(users => {
      res.send(users);
    }).catch(err => {
      res.status(400).send(err); 
      console.log('error: ' + err); 
    }
    )
  
};