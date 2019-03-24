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

exports.create = function(req, res) {
      var user = new User(req.body);
  
      user.save(function(err) {
        if(err) {
          console.log(err);
          res.status(400).send(err);
        } else {
          console.log('user saved');
          res.json(user);
        }
      });
    };

exports.delete = function(req, res) {
      // Gets user from request variable, then removes it and puts it in the response variable. 
      var user = req.user; 
      
      user.remove(err=>{
        if(err) throw err; 
        res.json(user); 
        console.log('user deleted');
      })
    };

exports.findUserId = function(req, res, next, id) {
  User.findById(id).exec(function(err, user) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.user = user;
      next();
    }
  });
};