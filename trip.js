(function (exports) {
  function Trip (db) {
    this.db = db;
  }

  Trip.prototype.createTrip = function (trip) {
    this.db.add(trip);
  }

  Trip.prototype.updateTrip = function (id, data) {
    this.db.update(id, data);
  }

  Trip.prototype.removeTrip = function (id) {
    this.db.remove(id);
  }

  Trip.prototype.viewPastTrip = function (id) {
    const trip = this.db.get(id);
    console.log(trip);
  }

  exports.Trip = Trip;
})(typeof exports === 'undefined' ? window.app : exports)
