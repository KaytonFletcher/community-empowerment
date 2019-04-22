var Request = require('../models/requestSchema.js');
var User = require('../models/userSchema.js');

exports.list = function(req, res) {
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all users
    // .sort() returns alphabetically by default
    Request.find().sort('-created_at').populate('user').then(reqs => {
        console.log('reqs sent');
        res.send(reqs);
    }).catch(err => {
      res.status(400).send(err); 
      console.log('error: ' + err); 
    }
    )
  };

exports.delete = function(req, res) {
      // Gets user from request variable, then removes it and puts it in the response variable. 
      var request = req.request; 
      
      request.remove(err=>{
        if(err) throw err; 
        res.json(request); 
        console.log('request deleted');
      })
    };

exports.findReqId = function(req, res, next, id) {

  Request.findById(id).populate('user').exec(function(err, request) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.annc = annc;
      next();
    }
  });
};

exports.add = function(req, res) {
    var request = new Request ({
      subject : req.body.subject,
      description: req.body.description,
      user: req.body.user
    });

    request.save(function(err) {
        if(err) {
          console.log("SAVE ERROR" + err);
          return res.status(400).send(err.name);
          
        } else {
          //here is how you return data, can be accessed in authController front end with res.data.auth, res.data.token
          User.findById(request.user).exec(function(err, user) {
            if(err) {
              console.log('no user found'); 
            } else {
              user.programReqs.push(request._id); 
            }
          });
          console.log('request added');
          return res.status(201).send(request);
          }
      });
    };

    exports.respond = function(req, res) {
        
        };