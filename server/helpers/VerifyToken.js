var jwt = require('jsonwebtoken');
var config = require('../config/config');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  console.log("token: " + token);
  if (!token)
    return res.json({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.json({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;

    console.log("verified and decoded!");
    return res.status(200).json({ auth: true, message: 'verified' });
  });
}
module.exports = verifyToken;