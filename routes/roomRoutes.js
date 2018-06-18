const router = require('express').Router();
const roomController = require('../controllers/roomController');

router.post('/', roomController.createRoom);
router.get('/:id', roomController.getRoom);
router.delete('/:id', roomController.deleteRoom);

module.exports = router;