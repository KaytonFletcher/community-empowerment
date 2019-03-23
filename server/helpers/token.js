var jwt = require('jsonwebtoken');
var config = require('../config/config.js') 



dotenv.config();
const key = process.env.KEY;
const Token = ({ id }) => jwt.sign(
  { id },
  key,
  { expiresIn: '2h' },
);
export default Token;