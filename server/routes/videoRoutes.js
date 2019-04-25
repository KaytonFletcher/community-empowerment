var videos = require('../controllers/VideoController.js'), 
    express = require('express'), 
    router = express.Router(),
    verifyToken = require('../helpers/VerifyToken');

router.route('/')    
    .post(verifyToken, videos.add)
    .get(videos.list) 
   
router.route('/:videoId')
    .delete(verifyToken, videos.delete)

router.param('videoId', videos.findVideoById);    

module.exports = router;