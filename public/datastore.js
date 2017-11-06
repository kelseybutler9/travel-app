(function (exports) {

  function DataStore (url) {
    this.url = url;

    if(!url) {
      throw new Error('no endpoint provided');
    }
  }

  DataStore.prototype.add = function (item, callback) {
      $.post(this.url, item, function (res) {
        console.log(res);
        callback(res);
      })
  }

  DataStore.prototype.get = function (id, callback) {
    $.get(`${this.url}/${id}`, function(res) {
      console.log(res);
      callback(res);
    });
  }

  DataStore.prototype.getAll = function (callback) {
    $.getJSON(TRIPS_URL, function(res) {
        console.log(res);
        callback(res);
    });
  }

  DataStore.prototype.remove = function (item, id) {
      console.log('delete data in database');
      $.ajax({
           method: 'DELETE',
           url: TRIPS_URL+ '/' + id,
           data: JSON.stringify(item),
           success: function() {
               $(".delete-screen").prop("hidden", false);
           },
           dataType: 'json',
           contentType: 'application/json'
      });
  }

  DataStore.prototype.update = function (id, item, callback) {
      console.log('update data in database');
      $.put(`${this.url}/${id}`, item, function(res) {
      console.log(res);
      callback(res);
      });
    }
  }

  exports.DataStore = DataStore;
})(typeof exports === 'undefined' ? window.app : exports)

//similar to get
      // $.ajax({
      //     method: 'POST',
      //     url: TRIPS_URL,
      //     data: JSON.stringify(data),
      //     success: function(data) {
      //         $(".success-screen").prop("hidden", false);
      //     },
      //     dataType: 'json',
      //     contentType: 'application/json'
      //   });

 // $.ajax({
          // method: 'PUT',
          // url: TRIPS_URL + '/' + tripId,
          // data: JSON.stringify(trip),
          // success: function(trip) {
          //     $(".success-screen").prop("hidden", false);
          // }
     // });
