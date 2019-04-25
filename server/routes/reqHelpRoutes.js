var reqHelps = require('../controllers/ReqHelpController.js'), 
    express = require('express'), 
    router = express.Router(),
    verifyToken = require('../helpers/VerifyToken');

router.route('/')
    .post(verifyToken, reqHelps.add)
    .get(reqHelps.list)

router.route('/:reqId')
    .delete(reqHelps.delete);

// router.route('/respond/:reqId')
//     .post(reqHelps.respond); 

router.param('reqId', reqHelps.findReqId);

module.exports = router;