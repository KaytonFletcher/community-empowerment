var cal = require('../controllers/CalendController.js'), 
    express = require('express'), 
    router = express.Router(),
    verifyToken = require('../helpers/VerifyToken');

router.route('/reqEvent')    
    .post(verifyToken, cal.submitReq)    