var users = require('../controllers/usersController.js'), 
    express = require('express'), 
    router = express.Router();


router.route('/api/users')
    .get(users.list);  


module.exports = router;
