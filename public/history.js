(function (exports) {
  console.log(exports);
  const {DataStore, Trip} = exports.app;
  const url = 'http://localhost:8080/trips';
  const trip = new Trip(new DataStore(url));

  trip.viewItems(displayPastTrips);

  function displayPastTrips(data) {
    console.log(data);
    $('.past-trips').html('');
    for (index in data) {
      console.log(data[index].id);
      console.log(data[index].title);
      console.log(data[index].place);
      console.log(data[index].startDate);
      $('.past-trips').append(`<ls id="${data[index].id}"class="past-trip">
      <a href = "/edit/${data.trips[index].id}">${data[index].title}</a>
      <p>${data[index].place}</p><p>${data[index].startDate}</p><p>${data[index].endDate}</p>
      </ls>`);
    }
  }

})(typeof exports === 'undefined' ? window : exports)
//
// let MOCK_TRIP_UPDATES = {
//     "trips": [
//         {
//             "id": "1111111",
//             "title": "Vacation",
//             "place": "Chicago, Illinois",
//             "startDate": 10201992,
//             "endDate": 10301992,
//             "transportation": [{
//               transType: "Flight",
//               transInformation: "Afternoon flight, $700" }],
//             "residence": [{
//               residenceName: "Hilton Inn",
//               residenceComments: "nice staff, clean room"}],
//             "restaurants": [{
//               restaurantName: "Taco Bell",
//               restaurantComments: "great burritos" }],
//             "activities": [{
//               activityName: "Surfing",
//               activtiyInformation: "Fun!"
//             }]
//         },
//         {
//             "id": "22222",
//             "title": "Vacation 2",
//             "place": "Loop, Illinois",
//             "startDate": 10201992,
//             "endDate": 10301992,
//             "transportation": [{
//               transType: "Flight",
//               transInformation: "Afternoon flight, $700" }],
//             "residence": [{
//               residenceName: "Hilton Inn",
//               residenceInformation: "nice staff, clean room"}],
//             "restaurants": [{
//               restaurantName: "Taco Bell",
//               restaurantInformation: "great burritos" }],
//             "activities": [{
//               activityName: "Surfing",
//               activtiyInformation: "Fun!"
//             }]
//         }
//     ]
// };
//
// setTimeout(function(){displayPastTrips(MOCK_TRIP_UPDATES)}, 100);
//
//
//
// function displayPastTrips(data) {
//   $('.past-trips').html('');
//   for (index in data.trips) {
//     $('.past-trips').append(`<ls id="${index}"class="past-trip">
//     <a href = "/edit/${data.trips[index].id}">${data.trips[index].title}</a>
//     <p>${data.trips[index].place}</p><p>${data.trips[index].startDate}</p><p>${data.trips[index].endDate}</p>
//     </ls>`);
//   }
// }
