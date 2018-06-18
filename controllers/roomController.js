const RoomRepository = require('../repositories/roomRepository');
const functions = {};

functions.deleteRoom = function (req, res) {
    RoomRepository.deleteRoom(req.params.id, function (callback) {
        res.status(200).send(callback);
    });
};

functions.createRoom = function (req, res) {
    let room = {};
    room.name = req.body.name;
    room.notes = req.body.notes;
    room.active = req.body.active !== false;
    room.locationId = req.body.locationId;
    RoomRepository.addRoom(room, function (callback) {
        res.status(200).send(callback);
    })
};

functions.getRoom = function (req, res) {
    RoomRepository.getRoomById(req.params.id, function (callback) {
        res.status(200).send(callback);
    });
};

module.exports = functions;