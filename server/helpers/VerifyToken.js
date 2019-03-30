var jwt = require('jsonwebtoken');
var config = require('../config/config');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  console.log("token: " + token);
  if (token == null) {
    console.log("token is null"); 
    return res.json({ auth: false, message: "No token provided." });
  }
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) {
      return res.json({ auth: false, message: 'Failed to authenticate token.' });
      console.log("not good");
    }
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}
module.exports = verifyToken;