const LocationRepository = require('../repositories/locationRepository');
const functions = {};

functions.getAllLocations = function (req, res) {
    LocationRepository.getAllLocations(function (locations) {
       res.status(200).send(locations);
    });
};

functions.deleteLocation = function (req, res) {
  LocationRepository.deleteLocation(req.params.id, function (callback) {
     res.status(200).send(callback);
  });
};

functions.createLocation = function (req, res) {
  let location = {};
  location.street = req.body.street;
    location.nr = req.body.nr;
    location.plz = req.body.plz;
    location.city = req.body.city;
    console.log(req.body.active);
    location.active = req.body.active !== false;
    location.notes = req.body.notes;
  LocationRepository.addLocation(location, function (callback) {
      res.status(200).send(callback);
  })
};

functions.getLocationById = function (req, res) {
  LocationRepository.getLocationById(req.params.id, function (callback) {
      res.status(200).send(callback);
  });
};

module.exports = functions;