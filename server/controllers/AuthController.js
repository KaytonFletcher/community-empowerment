var User = require('../models/userSchema.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/config');


exports.register = function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  var user = new User ({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword,
    admin : false
  });
  
  user.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log('user saved');
      //res.json(user);

      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ auth: true, token: token });
      }
  });
};

exports.validate = function(req, res) {
  
  //gets users by unique email
  User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');

      //no user in database with this email
      if (!user) return res.status(404).send('No user found.');

      //compares hash of password sent to hash in database, returns true if matched
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });


      res.json({ auth: true, admin: user.admin ,token: token });
  });
};

exports.getUser = function(req, res, next) {

  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    
    res.json({ user: user });
  });

};