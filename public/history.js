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
      <a href = "/edit">${item.title}</a><p>${item.place}</p><p>${item.startDate}</p><p>${item.endDate}</p>
      <button type="submit" id=${item.id}>View Trip</button></ls>`);
      // :${item.id}
    }
  }
  //
  $('.container').on('submit', 'button', function(e) {
      let uid = this.id;
      e.preventDefault();
      console.log('click ran');
      trip.viewItem(uid, function (res) {
         res.redirect(`/history/:id`);


      });
  });

  //add in function to view trip on edit
  // trip.viewItem(tripId);

  exports.PastTrip = PastTrip;

})(typeof exports === 'undefined' ? window : exports);
