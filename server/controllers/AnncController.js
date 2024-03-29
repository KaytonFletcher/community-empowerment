var Announcement = require('../models/announcementSchema.js');

exports.list = function(req, res) {
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all users
    // .sort() returns alphabetically by default
    Announcement.find().sort({_id:-1}).then(anncs => {
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
        res.json(annc); 
      })
    };

exports.findAnncId = function(req, res, next, id) {

  Announcement.findById(id).exec(function(err, annc) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.annc = annc;
      next();
    }
  });
};

exports.add = function(req, res) {
    var annc = new Announcement ({
      title : req.body.title,
      description: req.body.description,
      date: req.body.date,
      subject: req.body.subject
    });

    annc.save(function(err) {
        if(err) {
          console.log("SAVE ERROR" + err);
          return res.status(400).send(err.name);
          
        } else {
          return res.status(201).send(annc);
          }
      });
    };