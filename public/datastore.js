(function (exports) {
  const TRIPS_URL = '//localhost:8080/trips';

  function DataStore () {
    this.data = {};
  }

  DataStore.prototype.add = function (data) {
      $.ajax({
          method: 'POST',
          url: TRIPS_URL,
          data: JSON.stringify(data),
          success: function(data) {
              $(".success-screen").prop("hidden", false);
          },
          dataType: 'json',
          contentType: 'application/json'
        });
  }

  DataStore.prototype.get = function (id) {
    $.ajax({//edit this function
           method: 'GET',
           url: TRIPS_URL + '/' + id,
           data: JSON.stringify(data),
           success: displayPastTrip(trip)
    });

    function displayPastTrip(trip) {
      let transportationDetails = '';
      trip.transportation.forEach(function (transportation) {
        transportationDetails += `<label>Enter the type of transportation for this trip.
          <input type="text" name="transType" value=${transportation.transType}>
        </label>
        <label>Enter more information about your transportation.
          <input type="text" name="transInformation" value=${transportation.transInformation}>
        </label>`
      });

      let residenceDetails = '';
      trip.residence.forEach(function (item) {
        residenceDetails += `<label>Enter the place you stayed at during your trip.
            <input type="text" name="residenceName" value=${item.stay}>
           </label>
           <label>Enter more information about your place of stay.
             <input type="text" name="residenceInformation" value=${item.residenceComments}>
           </label>`
      });

      let restaurantDetails = '';
      trip.restaurants.forEach(function (item) {
        restaurantDetails += `<label>Enter a restaurant you visited during your trip.
              <input type="text" name="restaurantName" value=${item.restaurantName}>
            </label>
            <label>Enter more information about the restaurant.
               <input type="text" name="restaurantInformation" value=${item.restaurantComments}>
            </label>`
      });

      let activityDetails = '';
      trip.activities.forEach(function (item) {
        activityDetails += `<label>Enter an activtiy you did during your trip.
            <input type="text" name="activityName" value=${item.activityName}>
          </label>
          <label>Enter more information about the activity.
            <input type="text" name="activityInformation" value=${item.activtiyInformation}>
          </label>`
      });

      $(".edit-trans").html(transportationDetails);
      $(".edit-residence").html(residenceDetails);
      $(".edit-restaurants").html(restaurantDetails);
      $(".edit-activity").html(activityDetails);

      $("form").attr('id') = trip.id;
      const updateFields = ["title", "place", "startDate", "endDate"];
      updateFields.forEach(field => {
        let input = `input[name=${field}]`;
        $("input").val(`${trip.field}`);
      });
    }
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
