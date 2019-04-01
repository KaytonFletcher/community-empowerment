var cal = require('../controllers/CalendController.js'), 
    express = require('express'), 
    router = express.Router(),
    verifyToken = require('../helpers/VerifyToken');

router.route('/')    
    .post(cal.submitReq)
    .get(cal.listEvents) 

router.route('/:eventId')
    .delete(cal.deleteEvent)

router.param('eventId', cal.findEventId);

module.exports = router;