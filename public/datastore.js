(function (exports) {

  function DataStore (url) {
    this.url = url;

    if(!url) {
      throw new Error('no endpoint provided');
    }
  }

  DataStore.prototype.add = function (data, callback) {
      $.post(this.url, data, function (res) {
        console.log(res);
        //callback
      })//similar to get
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
  }

  DataStore.prototype.get = function (id, callback) {
    $.get(`${this.url}/${id}`, function(res) {
      console.log(res);
      callback(res);
    });
  }

  DataStore.prototype.getAll = function () {
    $.getJSON(TRIPS_URL, function(trips) {
      $('.past-trips').html('');
      for (index in data.trips) {
        $('.past-trips').append(`<ls id="${index}"class="past-trip">
        <a href = "/edit/${data.trips[index].id}">${data.trips[index].title}</a>
        <p>${data.trips[index].place}</p><p>${data.trips[index].startDate}</p><p>${data.trips[index].endDate}</p>
        </ls>`);
      }
    });
  }

  DataStore.prototype.remove = function (trip, tripId) {
      console.log('delete trip in database');
      $.ajax({
           method: 'DELETE',
           url: TRIPS_URL+ '/' + 'tripId',
           data: JSON.stringify(trip),
           success: function() {
               $(".delete-screen").prop("hidden", false);
           },
           dataType: 'json',
           contentType: 'application/json'
      });
  }

  DataStore.prototype.update = function (tripId, trip) {
      console.log('update trip in database');
      $.ajax({
           method: 'PUT',
           url: TRIPS_URL + '/' + tripId,
           data: JSON.stringify(trip),
           success: function(trip) {
               $(".success-screen").prop("hidden", false);
           }
      });
    }
  }

  exports.DataStore = DataStore;
})(typeof exports === 'undefined' ? window.app : exports)
