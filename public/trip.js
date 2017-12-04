(function (exports) {
  function Trip (db) {
    this.db = db;
  }

  Trip.prototype.create = function (item) {
    this.db.add(item);
  };

  Trip.prototype.updateItem = function (id, data) {
    this.db.update(id, data);
  };

  Trip.prototype.removeItem = function (item, id) {
    this.db.remove(item, id);
  };

  Trip.prototype.viewItem = function (id, callback) {
    this.db.get(id, callback);
  };

  Trip.prototype.viewItems = function (callback) {
    this.db.getAll(callback);
  };

  exports.Trip = Trip;
})(typeof exports === 'undefined' ? window.app : exports);
