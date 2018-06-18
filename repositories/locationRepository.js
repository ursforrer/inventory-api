const Location = require('../models').Location;
const functions = {};

functions.getAllLocations = function (callback) {
    Location.all().then(locations => {
        callback(locations);
    }).catch(error => {
       callback(error);
    });
};

functions.getLocationById = function (id, callback) {
  Location.findById(id).then(location => {
      callback(location);
  }).catch(error => {
      callback(error);
  });
};

functions.addLocation = function (newLocation, callback) {
  Location.create(newLocation).then(() => {
      callback("OK");
  }).catch(error => {
      callback(error);
  });
};

functions.updateLocation = function (Location, callback) {
    Location.findById(Location.id).then(item => {
       let currentLocationDB = item;
       if (!item) {
           callback("Location not found");
       }
       item.update({
           street: Location.street || currentLocationDB.street,
           nr: Location.nr || currentLocationDB.nr,
           plz: Location.plz || currentLocationDB.plz,
           city: Location.city || currentLocationDB.city,
           active: Location.active || currentLocationDB.active,
           notes: Location.notes || currentLocationDB.notes
       }).then(() => {
           callback("OK");
       }).catch(error => {
           callback(error);
       });
    }).catch(error => {
        callback(error);
    });
};

functions.deleteLocation = function (id, callback) {
  Location.findById(id).then(item => {
     if (!item) {
         callback("Location not found");
     }
     item.destroy().then(() => callback("OK")).catch(error => callback(error));
  }).catch(error => {
     callback(error);
  });
};

module.exports = functions;
