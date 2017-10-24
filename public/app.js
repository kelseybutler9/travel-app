let MOCK_TRIP_UPDATES = {
    "trips": [
        {
            "id": "1111111",
            "title": "Vacation",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              type: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        },
        {
            "id": "1111111",
            "title": "Vacation",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              type: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        },
        {
            "id": "1111111",
            "title": "Vacation",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              type: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        },
        {
            "id": "1111111",
            "title": "Vacation",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              type: "Flight",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [{
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
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

function displayTrips(data) {
    for (index in data.trips) {
       $('past-trips-list').append(
        '<p>' + data.trips[index].text + '</p>');//update this to be a past trip
    }
}

function getAndDisplayTrips() {
    getPastTrips(displayTrips);
}

$(function() {
    getAndDisplayTrips();
})

$('.homescreen').on('submit', function(event) {
	event.preventDefault();
  createNewTripForm();
	$('.homescreen').prop('hidden', true);
});

function createNewTripForm () {
  $('.create-a-trip-form').prop('hidden', false);
}

$('.travel').on('submit', function(event) {
	event.preventDefault();
  createNewTravelItem();
});

$('.residence').on('submit', function(event) {
	event.preventDefault();
  createNewResidenceItem();
});

$('.restaurants').on('submit', function(event) {
	event.preventDefault();
  createNewRestaurantItem();
});

$('.activities').on('submit', function(event) {
	event.preventDefault();
  createNewActivityItem();
});

function createNewTravelItem() {
  $('.travel-html').append(`<label>Enter the type of transportation for this trip.
    <input type="text" name="airport"></label><label>Enter more information about your travel.
    <input type="text" name="flight-information"></label>`);
}

function createNewResidenceItem() {
  $('.residence-html').append(`<label>Enter the place you stayed at during your trip.
    <input type="text" name="hotel"></label><label>Enter more information about your place of stay.
    <input type="text" name="hotel-information"></label>`);
}

function createNewRestaurantItem() {
  $('.restaurants-html').append(`<label>Enter a restaurant you visited during your trip.
    <input type="text" name="restaurant"></label><label>Enter more information about the restaurant.
    <input type="text" name="restaurant-information"></label>`);
}

function createNewActivityItem() {
  $('.activities-html').append(`<label>Enter an activtiy you did during your trip.
    <input type="text" name="activity"></label><label>Enter more information about the activity.
    <input type="text" name="activity-information"></label>`);
}

$('.submit-trip-create').on('submit', function(event) {
	event.preventDefault();
  $(create-a-trip-form).prop(hidden, true);
  //add in a function to redirect to a new screen
  addTripToDatabase();
});

$('.new-trip-create').on('submit', function(event) {
	event.preventDefault();
  createNewTripForm();
});

$('.past-trips-create').on('submit', function(event) {
	event.preventDefault();
  $(create-a-trip-form).prop(hidden, true);
  viewPastTripsList();
});

function addTripToDatabase() {
  console.log('add trip to database');
}

function viewPastTripsList() {
  console.log('view past trips list');
}
