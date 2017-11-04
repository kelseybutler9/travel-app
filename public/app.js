(function (exports) {
  // console.log(exports);
  // const {FormHandler} = exports.app
  // const newformHandler = new FormHandler('[new-trip-form="form"]');
  // const editformHandler = new FormHandler('#edit-trip-form')
  //
  // newformHandler.addSubmitHandler((data) => {
  //   addTripToDatabase(data);
  // });
  //
  // editformHandler.addSubmitHandler((data) => {
  //   updateTripInDatabase(data);
  // });

  let MOCK_TRIP_UPDATES = {
      "trips": [
          {
              "id": "1111111",
              "title": "Vacation",
              "location": "Chicago, Illinois",
              "startDate": 10201992,
              "endDate": 10301992,
              "transportation": [{
                transType: "Flight",
                transInformation: "Afternoon flight, $700" }],
              "residence": [{
                residenceName: "Hilton Inn",
                residenceComments: "nice staff, clean room"}],
              "restaurants": [{
                restaurantName: "Taco Bell",
                restaurantComments: "great burritos" }],
              "activities": [{
                activityName: "Surfing",
                activtiyInformation: "Fun!"
              }]
          },
          {
              "id": "22222",
              "title": "Vacation 2",
              "location": "Loop, Illinois",
              "startDate": 10201992,
              "endDate": 10301992,
              "transportation": [{
                transType: "Flight",
                transInformation: "Afternoon flight, $700" }],
              "residence": [{
                residenceName: "Hilton Inn",
                residenceInformation: "nice staff, clean room"}],
              "restaurants": [{
                restaurantName: "Taco Bell",
                restaurantInformation: "great burritos" }],
              "activities": [{
                activityName: "Surfing",
                activtiyInformation: "Fun!"
              }]
          }
      ]
  };

// $('#new-trip-form').submit(function(event) {
//     event.preventDefault();
//
//     let inputs = $(":input").serializeArray();
//     console.log(inputs);
//     inputs = handleInputs(inputs);
//     addTripToDatabase(handleInputs(inputs));
// });
//
//
// $('#edit-trip-form').submit(function(event) {
//     event.preventDefault();
//     let inputs = $(":input").serializeArray();
//     let trip = handleInputs(inputs);
//     console.log(trip);
//     //updateTripInDatabase();
// });


// function getData() {
//   const settings ={
//     url: '/trips',
//     data: {
//
//     }
//
//   }
//
// }


setTimeout(function(){displayPastTrips(MOCK_TRIP_UPDATES)}, 100);

function displayPastTrips(data) {
    $('.past-trips').html('');
    for (index in data.trips) {
      $('.past-trips').append(`<ls id="${index}"class="past-trip">
      <a href = "/edit/${data.trips[index].id}">${data.trips[index].title}</a>
      <p>${data.trips[index].location}</p><p>${data.trips[index].startDate}</p><p>${data.trips[index].endDate}</p>
      </ls>`);
    }
}



// $.getJSON('/edit').done(function(result) {
//   console.log(result);
// });
//$(getPastTrip(0));

////////
function getPastTrip(tripId) {
  setTimeout(function() {displayPastTrip(MOCK_TRIP_UPDATES, tripId)}, 100);

}

function displayPastTrip(data, tripId) {

  let transportationDetails = '';
  data.trips[tripId].transportation.forEach(function (transportation) {
    transDetails += `<label>Enter the type of transportation for this trip.
      <input type="text" name="transType" value=${transportation.transType}>
    </label>
    <label>Enter more information about your transportation.
      <input type="text" name="transInformation" value=${transportation.transInformation}>
    </label>`
  });

  let residenceDetails = '';
  data.trips[tripId].residence.forEach(function (item) {
    residenceDetails += `<label>Enter the place you stayed at during your trip.
        <input type="text" name="residenceName" value=${item.stay}>
       </label>
       <label>Enter more information about your place of stay.
         <input type="text" name="residenceInformation" value=${item.residenceComments}>
       </label>`
  });

  let restaurantDetails = '';
  data.trips[tripId].restaurants.forEach(function (item) {
    restaurantDetails += `<label>Enter a restaurant you visited during your trip.
          <input type="text" name="restaurantName" value=${item.restaurantName}>
        </label>
        <label>Enter more information about the restaurant.
           <input type="text" name="restaurantInformation" value=${item.restaurantComments}>
        </label>`
  });

  let activityDetails = '';
  data.trips[tripId].activities.forEach(function (item) {
    activityDetails += `<label>Enter an activtiy you did during your trip.
        <input type="text" name="activityName" value=${item.activityName}>
      </label>
      <label>Enter more information about the activity.
        <input type="text" name="activityInformation" value=${item.activtiyInformation}>
      </label>`
  });
  $("#edit-trip-form").getJSON('/one').done(function(result) {
    console.log(result);
  });
  //$("#edit-trip-form").find('[input=title]').text('title');
  //$('[input=title]').val(data.trips[tripId].title);
    //console.log($( ":input" ).serializeArray());
}

$(".success-btn").on('click', function() {
  $('.success-screen').prop(hidden, true);
});

function getInputtedValues(callbackFn) {
  //console.log($( ":input" ).serializeArray());
  callbackFn();
}

function addTripToDatabase(trip) {
  console.log('add trip to database');
  // $.ajax({
  //     method: 'POST',
  //     url: TRIPS_URL,
  //     data: JSON.stringify(trip),
  //     success: function(data) {
  //         displayPastTrips();
  //     },
  //     dataType: 'json',
  //     contentType: 'application/json'
  //   });
}

function updateTripInDatabase(trip) {
  console.log('update trip in database');
  //$.ajax({
 //       method: 'PUT',
 //       url: TRIPS_URL + '/' + tripId,
 //       data: JSON.stringify(trip),
 //       success: function(data) {
 //           displayPastTrips();
 //       }
 //     });
}

function deleteTripInDatabase(tripId) {
  console.log('delete trip in database');
  //$.ajax({
 //       method: 'DELETE',
 //       url: TRIPS_URL+ '/' + 'tripId',
 //       data: JSON.stringify(trip),
 //       success: function(data) {
 //           //add in a callback
 //       },
 //       dataType: 'json',
 //       contentType: 'application/json'
 //     });
}

/////// for both edit and new
  $('.new-addTrans').click(function(event) {
  	event.preventDefault();
    createNewTransItem('.new-trans');
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
    createNewTransItem('.edit-trans');
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

  function createNewTransItem(classString) {
    $(classString).append(`<label>Enter the type of transportation for this trip.
      <input type="text" name="transType"></label><label>Enter more information about your transportation.
      <input type="text" name="transInformation"></label>`);
  }

  function createNewResidenceItem(classString) {
    $(classString).append(`<label>Enter the place you stayed at during your trip.
      <input type="text" name="stay"></label><label>Enter more information about your place of stay.
      <input type="text" name="residenceInformation"></label>`);
  }

  function createNewRestaurantItem(classString) {
    $(classString).append(`<label>Enter a restaurant you visited during your trip.
      <input type="text" name="restaurantName"></label><label>Enter more information about the restaurant.
      <input type="text" name="restaurantInformation"></label>`);
  }

  function createNewActivityItem(classString) {
    $(classString).append(`<label>Enter an activtiy you did during your trip.
      <input type="text" name="activityName"></label><label>Enter more information about the activity.
      <input type="text" name="activityInformation"></label>`);
  }

})(typeof exports === 'undefined' ? window : exports)
