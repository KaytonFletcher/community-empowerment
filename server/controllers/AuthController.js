var User = require('../models/userSchema.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/config');

//this is the contrller function called in authRoutes when a post request is made to /api/auth/register
exports.register = function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  var user = new User ({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword,
    organization: req.body.organization,
    admin : false
  });
  
  user.save(function(err) {
    if(err) {
      console.log("SAVE ERROR" + err);

      if(err.name == 'ValidationError'){
        return res.status(400).send("Invalid Email");
      } else if(err.name == 'WriteError' || err.name == 'MongoError' ){
        console.log("Write Error " + err);
        return res.status(400).send("This email is already in use");
      }
        res.status(400).send(err.name);
      
    } else {
      
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 3600 //86400 expires in 24 hours
      });

      //here is how you return data, can be accessed in authController front end with res.data.auth, res.data.token
      res.status(201).json({ auth: true, token: token });
      }
  });
};

exports.validate = function(req, res) {
  
  //gets users by unique email
  User.findOne({ email: req.body.email }).populate('programReqs').populate('eventReqs').exec(function (err, user) {
      if (err) return res.status(500).send('Error on the server.');

      //no user in database with this email
      if (!user) return res.status(404).send('Bad email or password');

      //compares hash of password sent to hash in database, returns true if matched
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {console.log("Bad email or password"); return res.status(401).send('Bad email or password');}
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 3600 // expires in 24 hours
      });
      console.log("sending status");

      res.status(200).json({ auth: true, admin: user.admin ,token: token });
  });
};

exports.getUser = function(req, res, next) {

  User.findById(req.userId, { password: 0 }).populate('programReqs').populate('eventReqs').exec(function (err, user) {
    if (err) return res.status(500).send("Server error finding user");
    if (!user) return res.status(404).send("No user found.");
    
    res.status(200).json({ user: user });
  });

};

exports.updateUser = function(req, res, next) {
  User.findById(req.userId, { password: 0 }).populate('programReqs').populate('eventReqs').exec(function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    if(req.body.name){
      user.name = req.body.name;
    }
    if(req.body.email){
      user.email = req.body.email;
    }
    if(req.body.organization){
      user.organization = req.body.organization;
    }
    user.save();

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 3600 // expires in 24 hours
    });
    res.status(200).json({ auth: true, admin: user.admin ,token: token });
  });

};

exports.changePsw = function(req, res, next) {
  if(!req.body.oldPassword || !req.body.newPassword){
    return res.status(500).send("No password provided");
  }

  User.findById(req.userId).populate('programReqs').populate('eventReqs').exec(function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");

    var passwordIsValid = bcrypt.compareSync(req.body.oldPassword, user.password);
    if (!passwordIsValid) {return res.status(401).send({ auth: false, token: null });}

    var newHash = bcrypt.hashSync(req.body.newPassword, 12);
    user.password = newHash;
    user.save();

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).json({ auth: true, admin: user.admin, token: token });
  });
};

exports.deleteAccount = function(req,res){
  User.findById(req.userId).populate('programReqs').populate('eventReqs').exec(function (err, user) {
    if(err){return res.status(500); }
    user.programReqs.forEach(program => {
      program.remove();
    });
    user.eventReqs.forEach(event => {
      event.remove();
    });
    user.remove();
  });
  return res.status(200).json({ message: "success"});
}