const express = require('express');
const router  = express.Router();

const webRouter = require('./web/routes');

router.use('/web/v1', webRouter);

module.exports = router;
