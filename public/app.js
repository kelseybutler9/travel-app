let MOCK_TRIP_UPDATES = {
    "trips": [
        {
            "id": "1111111",
            "title": "Vacation",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              travelType: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
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
            "travel": [{
              travelType: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
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
            "id": "33",
            "title": "Business",
            "location": "Cleveland, Ohio",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              travelType: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
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
            "id": "444",
            "title": "Wedding",
            "location": "Bahamas",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              type: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              restaurantName: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              activityName: "Surfing",
              activtiyInformation: "Fun!"
            }]
        }
    ]
};

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

function getPastTrips(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_TRIP_UPDATES)}, 100);
}

function displayPastTrips(data) {
    $('.past-trips').html('');
    for (index in data.trips) {
      console.log(data.trips[index]);
      $('.past-trips').append(`<ls id="${index}"class="past-trip">
      <button type="button" id="${data.trips[index].id} "class="update-trip-button">${data.trips[index].title}</button>
      <p>${data.trips[index].location}</p><p>${data.trips[index].startDate}</p><p>${data.trips[index].endDate}</p>
      </ls>`);
      //update buttons to anchors
    }
}

$(getPastTrips(displayPastTrips));


$("history-btn").on("click", function() {
  console.log('view past trips ran');
  getAndDisplayTrips();
})
////////
function getUpdatePastTrip(callbackFn, tripId) {

  setTimeout(function() {callbackFn(MOCK_TRIP_UPDATES, tripId)}, 100);
}

function displayPastTrip(data, tripId) {
  $('.past-trips').html('');
  let travelDetails = '';
  data.trips[tripId].travel.forEach(function (travel) {
    travelDetails += `<label>Enter the type of transportation for this trip.
      <input type="text" name="travelType" value=${travel.travelType}>
    </label>
    <label>Enter more information about your travel.
      <input type="text" name="travelInformation" value=${travel.travelInformation}>
    </label>`
  });
  console.log(travelDetails);

  let residenceDetails = '';
  data.trips[tripId].residence.forEach(function (item) {
    residenceDetails += `<label>Enter the place you stayed at during your trip.
        <input type="text" name="stay" value=${item.stay}>
       </label>
       <label>Enter more information about your place of stay.
         <input type="text" name="residenceInformation" value=${item.residenceComments}>
       </label>`
  });
  console.log(residenceDetails);

  let restaurantDetails = '';
  data.trips[tripId].restaurants.forEach(function (item) {
    restaurantDetails += `<label>Enter a restaurant you visited during your trip.
          <input type="text" name="restaurantName" value=${item.restaurantName}>
        </label>
        <label>Enter more information about the restaurant.
           <input type="text" name="restaurantInformation" value=${item.restaurantComments}>
        </label>`
  });
  console.log(residenceDetails);

  let activityDetails = '';
  data.trips[tripId].activities.forEach(function (item) {
    activityDetails += `<label>Enter an activtiy you did during your trip.
        <input type="text" name="activityName" value=${item.activityName}>
      </label>
      <label>Enter more information about the activity.
        <input type="text" name="activityInformation" value=${item.activtiyInformation}>
      </label>`
  });
  console.log(residenceDetails);
}

$('.button-new').on('submit', function(event){
  event.preventDefault();
  console.log('submit ran');
  console.log($( ":input" ).serializeArray());
  //getInputtedValues();
})

function getInputtedValues(callbackFn) {
  console.log($( ":input" ).serializeArray());
  callbackFn();

}
//
// $('.past-trips-btn').on('click',  function(event) {
//   let tripId = this.parentElement.id;
//   viewPastTrip(tripId);
// })
//
//
// $('.new-trip-button').click(function(event) {
// 	event.preventDefault();
//   createNewTripForm();
// });
//
// $('.past-trips-btn').click(function(event) {
// 	event.preventDefault();
//   //button is clicked
//   viewPastTripsList();
// });
//
// $('.submit-trip-button').on('click',function(event) {
// 	event.preventDefault();
// });
//
// $('.submit-updated-trip-button').on('click',function(event) {
// 	event.preventDefault();
//   clearHtmlForms();
//   console.log('submit updated trip ran');
//   //getInputtedValues(updateTripInDatabase);
// });

// $('.homescreen-button').click(function(event) {
// 	event.preventDefault();
//   console.log('past trip ran');
// });

function addTripToDatabase() {
  console.log('add trip to database');
}

function viewPastTrip(tripId) {
  getAndDisplayPastTrip(tripId);//combine into one
}

function getAndDisplayPastTrip(tripId) {
    getUpdatePastTrip(displayPastTrip, tripId);
}

function updateTripInDatabase() {
  console.log('update trip in database');
}

/////// for both edit and new
$('.new-addTravel').click(function(event) {
	event.preventDefault();
  createNewTravelItem('.new-travel');
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


$('.edit-addTravel').click(function(event) {
	event.preventDefault();
  createNewTravelItem('.edit-travel');
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

function createNewTravelItem(classString) {
  $(classString).append(`<label>Enter the type of transportation for this trip.<input type="text" name="travelType"></label><label>Enter more information about your travel.<input type="text" name="travelInformation></label>`);
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
