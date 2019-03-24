var auth = require('../controllers/authController.js'), 
    express = require('express'), 
    router = express.Router(),
    VerifyToken = require('../helpers/VerifyToken');

//here we use the backend authController's "register" function, 
// when a post request is made to the /register route    
//the actual route defined in the authFactory is /api/auth/register 
//but if you look in express.js (in config folder), the app uses /api/auth/ for all routes defined by this router
router.route('/register')
    .post(auth.register);

router.route('/login')
    .post(auth.validate);   
    
router.route('/getUser')    
    .get(VerifyToken, auth.getUser)


module.exports = router;
