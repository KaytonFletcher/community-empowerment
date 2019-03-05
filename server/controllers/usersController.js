
var User = require('../models/user.js');

exports.list = function(req, res) {
    /** TODO **/
   
    //editing find all function from bootcamp 3 to sort, empty brackets returns all listings
    // .sort() returns alphabetically by default
    User.find().sort('name').exec(function(err, users){
      if(err) {res.status(400).send(err);
      } else{res.json(users);}
    });
  
};