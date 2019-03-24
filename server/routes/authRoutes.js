var auth = require('../controllers/authController.js'), 
    express = require('express'), 
    router = express.Router(),
    VerifyToken = require('../helpers/VerifyToken');

router.route('/register')
    .post(auth.register);

router.route('/login')
    .post(auth.validate);   
    
router.route('/getUser')    
    .get(VerifyToken, auth.getUser)


module.exports = router;
