var anncs = require('../controllers/AnncController.js'), 
    express = require('express'), 
    router = express.Router();

router.route('/')
    .get(anncs.list)

router.route('/:anncId')
    .delete(anncs.delete);

router.param('anncId', anncs.findAnncId);

module.exports = router;