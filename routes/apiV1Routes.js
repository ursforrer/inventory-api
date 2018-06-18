const router = require('express').Router();
const locationRoutes = require('./locationRoutes');

router.use('/locations', locationRoutes);

module.exports = router;