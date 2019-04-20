var researches = require('../controllers/ResearchController.js'), 
    express = require('express'), 
    router = express.Router(),
    verifyToken = require('../helpers/VerifyToken');

router.route('/')    
    .post(verifyToken, researches.add)
    .get(researches.list) 
   
router.route('/:researchId')
    .delete(verifyToken, researches.delete)

router.param('researchId', researches.findResearchById);    

module.exports = router;