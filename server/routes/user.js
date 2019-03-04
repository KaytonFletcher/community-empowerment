var users = require('../controllers/usersController.js'), 
    express = require('express'), 
    router = express.Router();


router.route('/')
    .get(users.list);  


module.exports = router;