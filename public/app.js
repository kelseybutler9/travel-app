(function (exports) {
  console.log(exports);
  const {FormHandler} = exports.app
  //const {FormHandler, DataStore, Trip, ArrayItem} = exports.app
  const formHandler = new FormHandler('[data-trips="form"]');

  const formId = $("form").attr('id');
  console.log(formId);

  formHandler.addSubmitHandler((data) => {
    if(formId === "new") {
      console.log("add to database");
      //trip.createTrip(data);
    }
    else {
      console.log("update database");
      //trip.updateTrip(data);
    }
  });



// $.getJSON('/edit').done(function(result) {
//   console.log(result);
// });
//$(getPastTrip(0));
let tripId = 0;
const trip = Trip(tripId, new DataStore());

$(".success-btn").on('click', function() {
  $('.success-screen').prop(hidden, true);
});

// trip.displayPastTrip()
//
// setTimeout(function() {displayPastTrip(MOCK_TRIP_UPDATES, tripId)}, 100);
//
//
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
//   // $("#edit-trip-form").getJSON('/edit').done(function(result) {
//   //   console.log(result);
//   // });
//   //$("#edit-trip-form").find('[input=title]').text('title');
//   //$('[input=title]').val(data.trips[tripId].title);
//     //console.log($( ":input" ).serializeArray());
// }
// //
// // $("#edit-trip-form").getJSON('/edit').done(function(result) {
// //   console.log(result);
// // });



// function addTripToDatabase(trip) {
//   console.log('add trip to database');
//   // $.ajax({
//   //     method: 'POST',
//   //     url: TRIPS_URL,
//   //     data: JSON.stringify(trip),
//   //     success: function(data) {
//   //         displayPastTrips();
//   //     },
//   //     dataType: 'json',
//   //     contentType: 'application/json'
//   //   });
// }
//
// function updateTripInDatabase(trip) {
//   console.log('update trip in database');
//   //$.ajax({
//  //       method: 'PUT',
//  //       url: TRIPS_URL + '/' + tripId,
//  //       data: JSON.stringify(trip),
//  //       success: function(data) {
//  //           displayPastTrips();
//  //       }
//  //     });
// }
//
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
//
// /////// for both edit and new


  $('.new-addTrans').click(function(event) {
  	event.preventDefault();
    const newarrayItem = new ArrayItem('.new-trans');
    //sample for addarrayitem
    newarrayItem.createNewTransItem("transportation", "transType", "transInformation");
  });

  $('.new-addResidence').click(function(event) {
  	event.preventDefault();
    createNewResidenceItem('.new-residence');
  });

  $('.new-addRestaurant').click(function(event) {
  	event.preventDefault();
    createNewRestaurantItem('.new-restaurant');
  });

  $('.new-addActivity').click(function(event) {
  	event.preventDefault();
    createNewActivityItem('.new-activity');
  });


  $('.edit-addTrans').click(function(event) {
  	event.preventDefault();
    ArrayItem.createNewTransItem('.edit-trans');
  });

  $('.edit-addResidence').click(function(event) {
  	event.preventDefault();
    createNewResidenceItem('.edit-residence');
  });

  $('.edit-addRestaurant').click(function(event) {
  	event.preventDefault();
    createNewRestaurantItem('.edit-restaurant');
  });

  $('.edit-addActivity').click(function(event) {
  	event.preventDefault();
    createNewActivityItem('.edit-activity');
  });

  // function createNewTransItem(classString) {
  //   $(classString).append(`<label>Enter the type of transportation for this trip.
  //     <input type="text" name="transType"></label><label>Enter more information about your transportation.
  //     <input type="text" name="transInformation"></label>`);
  // }
  //
  // function createNewResidenceItem(classString) {
  //   $(classString).append(`<label>Enter the place you stayed at during your trip.
  //     <input type="text" name="stay"></label><label>Enter more information about your place of stay.
  //     <input type="text" name="residenceInformation"></label>`);
  // }
  //
  // function createNewRestaurantItem(classString) {
  //   $(classString).append(`<label>Enter a restaurant you visited during your trip.
  //     <input type="text" name="restaurantName"></label><label>Enter more information about the restaurant.
  //     <input type="text" name="restaurantInformation"></label>`);
  // }
  //
  // function createNewActivityItem(classString) {
  //   $(classString).append(`<label>Enter an activtiy you did during your trip.
  //     <input type="text" name="activityName"></label><label>Enter more information about the activity.
  //     <input type="text" name="activityInformation"></label>`);
  // }

})(typeof exports === 'undefined' ? window : exports)
