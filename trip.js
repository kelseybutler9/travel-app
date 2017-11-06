(function (exports) {
  function Trip (db) {
    this.db = db;
  }

  Trip.prototype.create = function (trip, callback) {
    this.db.add(trip, callback);
  }

  Trip.prototype.updateItem = function (id, trip, callback) {
    this.db.update(id, callback);
  }

  Trip.prototype.removeItem = function (trip, id, callback) {
    this.db.remove(trip, id, callback);
  }

  Trip.prototype.viewItem = function (id, callback) {
    const item = this.db.get(id, callback);
    console.log(item);
  }

  Trip.prototype.viewItems = function (callback) {
    this.db.getAll(callback);
  }

  exports.Trip = Trip;
})(typeof exports === 'undefined' ? window.app : exports)
