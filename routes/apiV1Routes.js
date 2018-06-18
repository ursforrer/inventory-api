const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const roomRoutes = require('./roomRoutes');

router.use('/locations', locationRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;