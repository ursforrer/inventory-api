const router = require('express').Router();
const locationController = require('../controllers/locationController');

router.get('/', locationController.getAllLocations);
router.post('/', locationController.createLocation);
//router.get('/:id', locationController.getLocationById);
//router.patch('/:id', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;