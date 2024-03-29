var jwt = require('jsonwebtoken');
var config = require('../config/config');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: "No logged in!" });
  }
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) {
      return res.status(401).send({ auth: false, message: 'Your token has expired!' });
    }
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}
module.exports = verifyToken;