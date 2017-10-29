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
      $('.past-trips').append(`<ls id="${index}"class="past-trip"><button type="button" id="${data.trips[index].id} "class="update-trip-button">${data.trips[index].title}</button><p>${data.trips[index].location}</p><p>${data.trips[index].startDate}</p><p>${data.trips[index].endDate}</p></ls>`);
    }
}

function getAndDisplayTrips() {
    getPastTrips(displayPastTrips);
}

function getUpdatePastTrip(callbackFn, tripId) {

  setTimeout(function() {callbackFn(MOCK_TRIP_UPDATES, tripId)}, 100);
}

function displayPastTrip(data, tripId) {
  $('.create-a-trip-forms').prop('hidden', true);
  $('.update-past-trip-form').prop('hidden', false);
  $(`.homescreen`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
	$('.homescreen').prop('hidden', true);

  $('.update-past-trip').html('');

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


   $('.update-past-trip').append(`
     <h3>General Info</h3>
   <form class="general-info-form">
     <div class="general-info">
       <label>Enter the title of your trip.
         <input type="text" name="title" value=${data.trips[tripId].title}>
       </label>
       <label>Enter the location of your trip.
         <input type="text" name="location" value=${data.trips[tripId].location}>
       </label>
       <label>Enter the start date of your trip.
         <input type="text" name="startDate" value=${data.trips[tripId].startDate}>
       </label>
       <label>Enter the end date of your trip.
         <input type="text" name="endDate" value=${data.trips[tripId].endDate}>
       </label>
     </div>
   </form>
   <h3>Travel</h3>
   <form class="travel-form">
     <div class="travel">
        ${travelDetails}
     </div>
     <button type="button" class="addTravel">Add another travel item</button>
   </form>
   <h3>Residence</h3>
   <form class="residence-form">
     <div class="residence">
         ${residenceDetails}
     </div>
     <button type="button" class="addResidence">Add another residence item</button>
   </form>
   <h3>Restaurants</h3>
   <form class="restaurants-form">
     <div class="restaurants">
       ${restaurantDetails}
     </div>
     <button type="button" class="addRestaurant">Add another restaurant</button>
   </form>
   <h3>Activties</h3>
   <form class="activities-form">
     <div class="activities">
       ${activityDetails}
     </div>
     <button type="button" class="addActivity">Add another activity</button>
   </form>`);
}

function getAndDisplayPastTrip(tripId) {
    getUpdatePastTrip(displayPastTrip, tripId);
}

$('.past-trips').on('click', '.update-trip-button', function(event) {
  let tripId = this.parentElement.id;
  hideAllSections(viewPastTrip(tripId));
  //viewPastTrip(tripId);
})


$('.new-trip-button').click(function(event) {
	event.preventDefault();
  hideAllSections(createNewTripForm);
  // createNewTripForm();
});

function hideAllSections(callbackFn) {
  $('.create-a-trip-forms').prop('hidden', true);
  $('.update-past-trip-form').prop('hidden', true);
  $(`.homescreen`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $('.homescreen').prop('hidden', true);
  callbackFn();
}

$('.view-past-trips').click(function(event) {
	event.preventDefault();
  // $('.create-a-trip-forms').prop('hidden', true);
  // $('.update-past-trip-form').prop('hidden', true);
  // $(`.homescreen`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', false);
	// $('.homescreen').prop('hidden', true);
  viewPastTripsList();
});

function createNewTripForm () {
  $(`.create-a-trip-forms`).prop('hidden', false);
  // console.log(`false hide for create trip`);
  // $(`.homescreen`).prop('hidden', true);
  // $(`.past-trips-list`).prop('hidden', true);
  // $('.update-past-trip-form').prop('hidden', true);
  $(`.create-a-trip-form`).html(`
    <h3>General Info</h3>
      <form class="general-info-form">
        <div class="general-info">
          <label>Enter the title of your trip.
            <input type="text" name="title">
          </label>
          <label>Enter the location of your trip.
            <input type="text" name="location">
          </label>
          <label>Enter the start date of your trip.
            <input type="text" name="startDate">
          </label>
          <label>Enter the end date of your trip.
            <input type="text" name="endDate">
          </label>
        </div>
      </form>
    <h3>Travel</h3>
      <form class="travel-form">
        <div class="travel">
          <label>Enter the type of transportation for this trip.
            <input type="text" name="travelType">
          </label>
          <label>Enter more information about your travel.
            <input type="text" name="travelInformation">
          </label>
        </div>
        <button type="button" class="addTravel">Add another travel item</button>
      </form>
    <h3>Residence</h3>
      <form class="residence-form">
        <div class="residence">
          <label>Enter the place you stayed at during your trip.
            <input type="text" name="stay">
          </label>
          <label>Enter more information about your place of stay.
            <input type="text" name="residenceComments">
          </label>
        </div>
        <button type="button" class="addResidence">Add another residence item</button>
      </form>
    <h3>Restaurants</h3>
      <form class="restaurants-form">
        <div class="restaurants">
          <label>Enter a restaurant you visited during your trip.
            <input type="text" name="restaurantName">
          </label>
          <label>Enter more information about the restaurant.
            <input type="text" name="restaurantComments">
          </label>
        </div>
        <button type="button" class="addRestaurant">Add another restaurant</button>
      </form>
    <h3>Activties</h3>
      <form class="activities-form">
        <div class="activities">
          <label>Enter an activtiy you did during your trip.
            <input type="text" name="activityName">
          </label>
          <label>Enter more information about the activity.
            <input type="text" name="activityInformation">
          </label>
        </div>
        <button type="button" class="addActivites">Add another activity</button>
      </form>`);
  //$('.travel-input').val('');
}

$('form').on('click', '.addTravel', function(event) {
	event.preventDefault();
  console.log('ran');
  createNewTravelItem();
});

$('form').on('click', '.addResidence', function(event) {
	event.preventDefault();
  createNewResidenceItem();
});

$('form').on('click', '.addRestaurant', function(event) {
	event.preventDefault();
  createNewRestaurantItem();
});

$('form').on('click', '.addActivity', function(event) {
	event.preventDefault();
  createNewActivityItem();
});

function createNewTravelItem() {
  $('.travel').append(`<label>Enter the type of transportation for this trip.<input type="text" name="travelType"></label><label>Enter more information about your travel.<input type="text" name="travelInformation></label>`);
}

function createNewResidenceItem() {
  $('.residence').append(`<label>Enter the place you stayed at during your trip.
    <input type="text" name="stay"></label><label>Enter more information about your place of stay.
    <input type="text" name="residenceInformation"></label>`);
}

function createNewRestaurantItem() {
  $('.restaurants').append(`<label>Enter a restaurant you visited during your trip.
    <input type="text" name="restaurantName"></label><label>Enter more information about the restaurant.
    <input type="text" name="restaurantInformation"></label>`);
}

function createNewActivityItem() {
  $('.activities').append(`<label>Enter an activtiy you did during your trip.
    <input type="text" name="activityName"></label><label>Enter more information about the activity.
    <input type="text" name="activityInformation"></label>`);
}

$('.submit-trip-button').on('click',function(event) {
	event.preventDefault();

  hideAllSections(getInputtedValues(addTripToDatabase));

});


$('.submit-updated-trip-button').on('click',function(event) {
	event.preventDefault();
  $(`.create-a-trip-forms`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $(`.homescreen`).prop('hidden', false);
  $('.update-past-trip-form').prop('hidden', true);
  clearHtmlForms();
  console.log('submit updated trip ran');
  //getInputtedValues(updateTripInDatabase);
});

$('.homescreen-button').click(function(event) {
	event.preventDefault();
  console.log('past trip ran');
  $(`.create-a-trip-forms`).prop('hidden', true);
  $(`.past-trips-list`).prop('hidden', true);
  $(`.homescreen`).prop('hidden', false);
  $('.update-past-trip-form').prop('hidden', true);
});

function addTripToDatabase() {
  console.log('add trip to database');
  clearHtmlForms();
}

function viewPastTripsList() {
  console.log('view past trips list');
  getAndDisplayTrips();
}

function viewPastTrip(tripId) {
  getAndDisplayPastTrip(tripId);
}

function getInputtedValues(callbackFn) {
  $(`.homescreen`).prop('hidden', false);
  console.log($( ":input" ).serializeArray());
  callbackFn();

}

function clearHtmlForms() {
  $('.past-trips').html('');
  $('.update-past-trip').html('');
  $('.create-a-trip').html('');
}
function updateTripInDatabase() {
  console.log('update trip in database');
}
