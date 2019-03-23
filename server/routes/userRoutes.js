var users = require('../controllers/usersController.js'), 
    express = require('express'), 
    router = express.Router();


router.route('/')
    .get(users.list)
    .post(users.create);

router.route('/:userId')
    .delete(users.delete);

module.exports = router;
