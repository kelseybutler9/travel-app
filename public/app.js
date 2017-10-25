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

$('.new-trip-button').click(function(event) {
	event.preventDefault();
  createNewTripForm();
	$('.homescreen').prop('hidden', true);
});

$('.view-past-trips').click(function(event) {
	event.preventDefault();
  $('.create-a-trip-form').prop('hidden', true);
  $('.update-past-trip-form').prop('hidden', true);
  $(`.homescreen`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', false);
	$('.homescreen').prop('hidden', true);
  //add in function to retrieve list of trips
});

function createNewTripForm () {
  $('.create-a-trip-form').prop('hidden', false);
  $(`.homescreen`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $('.update-past-trip-form').prop('hidden', true);
  $('.travel-input').val('');
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

$('.submit-trip-button').click(function(event) {
	event.preventDefault();
  $(`.create-a-trip-form`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $(`.homescreen`).prop('hidden', false);
  $('.update-past-trip-form').prop('hidden', true);
  console.log('submit trip ran');
  //add in a function to redirect to a new screen if not homescreen
  addTripToDatabase();
});

$('.submit-updated-trip-button').click(function(event) {
	event.preventDefault();
  $(`.create-a-trip-form`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $(`.homescreen`).prop('hidden', false);
  $('.update-past-trip-form').prop('hidden', true);
  console.log('submit updated trip ran');
  //add in a function to redirect to a new screen if not homescreen
  updateTripInDatabase();
});

$('.homescreen-button').click(function(event) {
	event.preventDefault();
  console.log('past trip ran');
  $(`.create-a-trip-form`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $(`.homescreen`).prop('hidden', false);
  $('.update-past-trip-form').prop('hidden', true);
  viewPastTripsList();
});

function addTripToDatabase() {
  console.log('add trip to database');
}

function viewPastTripsList() {
  console.log('view past trips list');
}

function updateTripInDatabase() {
  console.log('update trip in database');
}
