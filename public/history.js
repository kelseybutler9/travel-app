(function (exports) {
  console.log(exports);
  const {DataStore, Trip} = exports.app;
  const url = 'http://localhost:8080/trips';
  const trip = new Trip(new DataStore(url));

  function PastTrip (id) {
    this.id = id;
    if (!id) {
      throw new Error('no ID provided');
    }
  }

  trip.viewItems(displayPastTrips);

  function displayPastTrips (data) {
    $('.container').html('');
    for (index in data) {
      let item = data[index];
      $('.past-trips').append(`<ls class="past-trip">
      <a href = "/edit/${item.id}">View ${item.title}</a><p>${item.place}</p><p>${item.startDate}</p><p>${item.endDate}</p>
      </ls>`);
    }
  }

  exports.PastTrip = PastTrip;

})(typeof exports === 'undefined' ? window : exports);
