(function (exports) {
  function Trip (tripId, db) {
    this.tripId = tripId;
    this.db = db;
  }

  Trip.prototype.createTrip = function (trip) {
    this.db.add(trip);
  }

  Trip.prototype.updateTrip = function (id) {
    this.db.update(id);
  }

  Trip.prototype.removeTrip = function (id) {
    this.db.remove(id);
  }

  Trip.prototype.viewPastTrips = function () {
    const trips = Object.keys(this.db.getAll())

    trips.forEach(id => {
      console.log(this.db.get(id))
    })
    //update html
  }

  exports.Trip = Trip;
})(typeof exports === 'undefined' ? window.app : exports)
