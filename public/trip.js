(function (exports) {
  function Trip (db) {
    this.db = db;
  }

  Trip.prototype.create = function (item) {
    console.log('create ran');
    this.db.add(item);
  };

  Trip.prototype.updateItem = function (id, data) {
    this.db.update(id, data);
  };

  Trip.prototype.removeItem = function (id) {
    this.db.remove(id);
  };

  Trip.prototype.viewItem = function (id, callback) {
    const trip = this.db.get(id, callback);
    console.log(trip);
  };

  Trip.prototype.viewItems = function (callback) {
    this.db.getAll(callback);
  };

  exports.Trip = Trip;
})(typeof exports === 'undefined' ? window.app : exports);
