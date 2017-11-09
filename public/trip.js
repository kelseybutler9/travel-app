(function (exports) {
  function Trip (db) {
    this.db = db;
  }

  Trip.prototype.create = function (item, callback, param) {
    this.db.add(item, callback, param);
    console.log('create ran');
  }

  Trip.prototype.updateItem = function (id, data) {
    this.db.update(id, data);
  }

  Trip.prototype.removeItem = function (id) {
    this.db.remove(id);
  }

  Trip.prototype.viewItem = function (id, callback) {
    const trip = this.db.get(id, callback);
    console.log(trip);
  }

  Trip.prototype.viewItems = function (callback) {
    this.db.getAll(callback);
  }

  exports.Trip = Trip;
})(typeof exports === 'undefined' ? window.app : exports)
