var Annc = require('../models/announcementSchema.js');

exports.list = function(req, res) {
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all users
    // .sort() returns alphabetically by default
    Annc.find().sort('created_at').then(anncs => {
      res.send(anncs);
    }).catch(err => {
      res.status(400).send(err); 
      console.log('error: ' + err); 
    }
    )
  };

exports.delete = function(req, res) {
      // Gets user from request variable, then removes it and puts it in the response variable. 
      var annc = req.annc; 
      
      annc.remove(err=>{
        if(err) throw err; 
        res.json(user); 
        console.log('annc deleted');
      })
    };

exports.findAnncId = function(req, res, next, id) {

  Annc.findById(id).exec(function(err, user) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.annc = annc;
      next();
    }
  });
};