const Room = require('../models').Room;
const functions = {};

functions.getAllRooms = function (callback) {
    Room.all().then(rooms => {
        callback(rooms);
    }).catch(error => {
        callback(error);
    });
};

functions.getRoomsByLocation = function (id, callback) {
    Room.findAll({
        where: {
            locationId: id
        }
    }).then(rooms => {
        callback(rooms);
    }).catch(error => {
        callback(error);
    });
};

functions.getRoomById = function (id, callback) {
    Room.findById(id).then(room => {
        callback(room);
    }).catch(error => {
        callback(error);
    });
};

functions.updateLocation = function (Room, callback) {
    Room.findById(Room.id).then(item => {
        let currentRoomDB = item;
        if (!item) {
            callback("Location not found");
        }
        item.update({
            name: Room.name || currentRoomDB.name,
            notes: Room.notes || currentRoomDB.notes,
            active: Room.active || currentRoomDB.active
        }).then(() => {
            callback("OK");
        }).catch(error => {
            callback(error);
        });
    }).catch(error => {
        callback(error);
    });
};

functions.deleteRoom = function (id, callback) {
    Room.findById(id).then(item => {
        if (!item) {
            callback("Room not found");
        }
        item.destroy().then(() => callback("OK")).catch(error => callback(error));
    }).catch(error => {
        callback(error);
    });
};

module.exports = functions;
