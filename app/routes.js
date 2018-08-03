let express = require('express');
let router = express.Router();

const toolsRouter = require('./tools/routes');
const webRouter = require('./web/routes');

router.use('/tools/v1', toolsRouter);
router.use('/web/v1', webRouter);

module.exports = router;
