(function (exports) {
  function DataStore (url) {
    this.url = url;
    if (!url) {
      throw new Error('no endpoint provided');
    }
  }

  DataStore.prototype.add = function (item) {
    $.ajax({
      method: 'POST',
      url: this.url,
      data: JSON.stringify(item),
      success: function () {
        console.log('success');
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  };

  DataStore.prototype.get = function (id, callback) {
    $.get(`${this.url}/${id}`, function (res) {
      console.log(res);
      callback(res);
    });
  };

  DataStore.prototype.getAll = function (callback) {
    $.getJSON(this.url, function (res) {
      console.log(res);
      callback(res);
    });
  };

  DataStore.prototype.remove = function (item, id) {
    console.log('delete data in database');
    $.ajax({
      method: 'DELETE',
      url: `${this.url}/${id}`,
      data: JSON.stringify(item),
      success: function () {
        console.log('delete data in database successful');
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  };

  DataStore.prototype.update = function (id, item) {
    console.log(item);
    console.log('update data in database');
    $.ajax({
      method: 'PUT',
      url: `${this.url}/${id}`,
      data: JSON.stringify(item),
      success: function () {
        console.log('successful update');
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  };

  exports.DataStore = DataStore;
})(typeof exports === 'undefined' ? window.app : exports);
