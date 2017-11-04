(function (exports) {
  //const TRIPS_URL = 'enter url';

  function DataStore () {
    this.data = {};
  }

  DataStore.prototype.add = function (trip) {
    //this.data[k] = v
    // function addTripToDatabase(trip) {
    //   console.log('add trip to database');
    //   // $.ajax({
    //   //     method: 'POST',
    //   //     url: TRIPS_URL,
    //   //     data: JSON.stringify(trip),
    //   //     success: function(data) {
    //   //         $(".success-screen").prop("hidden", false);
    //   //     },
    //   //     dataType: 'json',
    //   //     contentType: 'application/json'
    //   //   });
    // }
  }

  DataStore.prototype.get = function (data, id) {
    return this.data[k]
    // function displayPastTrip(data, tripId) {
    //   let transportationDetails = '';
    //   data.trips[tripId].transportation.forEach(function (transportation) {
    //     transportationDetails += `<label>Enter the type of transportation for this trip.
    //       <input type="text" name="transType" value=${transportation.transType}>
    //     </label>
    //     <label>Enter more information about your transportation.
    //       <input type="text" name="transInformation" value=${transportation.transInformation}>
    //     </label>`
    //   });
    //
    //   let residenceDetails = '';
    //   data.trips[tripId].residence.forEach(function (item) {
    //     residenceDetails += `<label>Enter the place you stayed at during your trip.
    //         <input type="text" name="residenceName" value=${item.stay}>
    //        </label>
    //        <label>Enter more information about your place of stay.
    //          <input type="text" name="residenceInformation" value=${item.residenceComments}>
    //        </label>`
    //   });
    //
    //   let restaurantDetails = '';
    //   data.trips[tripId].restaurants.forEach(function (item) {
    //     restaurantDetails += `<label>Enter a restaurant you visited during your trip.
    //           <input type="text" name="restaurantName" value=${item.restaurantName}>
    //         </label>
    //         <label>Enter more information about the restaurant.
    //            <input type="text" name="restaurantInformation" value=${item.restaurantComments}>
    //         </label>`
    //   });
    //
    //   let activityDetails = '';
    //   data.trips[tripId].activities.forEach(function (item) {
    //     activityDetails += `<label>Enter an activtiy you did during your trip.
    //         <input type="text" name="activityName" value=${item.activityName}>
    //       </label>
    //       <label>Enter more information about the activity.
    //         <input type="text" name="activityInformation" value=${item.activtiyInformation}>
    //       </label>`
    //   });
    //   console.log(transportationDetails);
    //   $(".edit-trans").html(transportationDetails);
    // }
  }

  DataStore.prototype.getAll = function () {
    return this.data
    // setTimeout(function(){displayPastTrips(MOCK_TRIP_UPDATES)}, 100);
    //
    // function displayPastTrips(data) {
    //     $('.past-trips').html('');
    //     for (index in data.trips) {
    //       $('.past-trips').append(`<ls id="${index}"class="past-trip">
    //       <a href = "/edit/${data.trips[index].id}">${data.trips[index].title}</a>
    //       <p>${data.trips[index].place}</p><p>${data.trips[index].startDate}</p><p>${data.trips[index].endDate}</p>
    //       </ls>`);
    //     }
    // }
  }

  DataStore.prototype.remove = function (k) {
    delete this.data[k]
    // function deleteTripInDatabase(tripId) {
    //   console.log('delete trip in database');
    //   //$.ajax({
    //  //       method: 'DELETE',
    //  //       url: TRIPS_URL+ '/' + 'tripId',
    //  //       data: JSON.stringify(trip),
    //  //       success: function(data) {
    //  //           //add in a callback
    //  //       },
    //  //       dataType: 'json',
    //  //       contentType: 'application/json'
    //  //     });
    // }
  }

  DataStore.prototype.update = function (tripId, data) {
    //   console.log('update trip in database');
    //   //$.ajax({
    //  //       method: 'PUT',
    //  //       url: TRIPS_URL + '/' + tripId,
    //  //       data: JSON.stringify(trip),
    //  //       success: function(data) {
    //  //           $(".success-screen").prop("hidden", false);
    //  //       }
    //  //     });
    // }
  }

  exports.DataStore = DataStore;
})(typeof exports === 'undefined' ? window.app : exports)
