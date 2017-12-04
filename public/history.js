(function (exports) {
  const {DataStore, Trip} = exports.app;
  const url = checkUrl() ;
  const trip = new Trip(new DataStore(url));
  
  function checkUrl() {
    let url = window.location.pathname;
    console.log(typeof url);
    if(url.includes('localhost')) {
      url = 'http://localhost:8080/trips';
    }
    else {
      url = 'https://lit-peak-71949.herokuapp.com/trips';
    }
    return url;
  }

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
      let startDate = moment(item.startDate).format('MM-DD-YYYY');
      let endDate = moment(item.endDate).format('MM-DD-YYYY');
      $('.past-trips').append(`<ls class="past-trip">
      <a href = "/edit/${item.id}">View ${item.title}</a><p>${item.place}</p><p>${startDate}</p><p>${endDate}</p>
      </ls>`);
    }
  }

  exports.PastTrip = PastTrip;
})(typeof exports === 'undefined' ? window : exports);
