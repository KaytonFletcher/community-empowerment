var users = require('../controllers/user.js'), 
    express = require('express'), 
    router = express.Router();


router.route('/')
    .get(users.list);  


