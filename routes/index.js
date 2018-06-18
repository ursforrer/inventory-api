const express = require('express');
const router = express.Router();
const apiV1Routes = require('./apiV1Routes');

router.use('/api/v1', apiV1Routes);


module.exports = router;
