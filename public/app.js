(function (exports) {
  console.log(exports);
  const {FormHandler, DataStore, Trip} = exports.app;
  const formHandler = new FormHandler('[data-trips="form"]');
  const url = 'http://localhost:8080/trips';
  const formClass = $("form").attr('class');
  const trip = new Trip(new DataStore(url));
  const arrayOptions = {transportation: ['transType', 'transInformation'], residence: ['residenceName', 'residenceInformation'], restaurant: ['restaurantName', 'restaurantInformation'], activity: ['activityName', 'activityInformation']};
  let currentLocation = window.location.pathname;

  hidePopup(`.delete-screen`);
  hidePopup(`.success-screen`);

  function displayPopup(className) {
    $(className).prop("hidden", false);
  }

  function hidePopup(className) {
    $(className).prop("hidden", true);
  }

  if(formClass === "edit") {
    let tripId = getEditId();
    $("form").attr("id") = tripId;
    console.log(tripId);
    trip.viewItem(tripId, displayPastTrip);
  }

  formHandler.addSubmitHandler((data) => {
    if(formClass === "new") {
      console.log("add to database");
      trip.create(data);
      displayPopup('.success-screen');
    }
    else {
      console.log("update database");
      trip.updateItem(data);
      displayPopup('.success-screen');
    }
  });

  function getEditId() {
    tripId = currentLocation.split("/").pop();
    console.log(tripId);
    return tripId;
  }

  $(`button[type="button"]`).click(function (e) {
    e.preventDefault();
    let myClass = this.className;
    let option = arrayOptions[`${myClass}`];
    createNewArrayItem(`.add${myClass}`, myClass , option[0], option[1], "", "");
  });

  $('.button-delete').on("click", function() {
    trip.removeItem(tripId, displayPopup, '.delete-screen');
  });

  function createNewArrayItem(className, topic, firstName, secondName, valOne, valTwo) {
    $(className).append(`<label>Enter the type of ${topic} for this trip.
      <input type="text" name="${firstName}" value="${valOne}"></label><label>Enter more information about your ${topic}.
      <input type="text" name="${secondName}" value="${valTwo}"></label>`);
  }

  function displayPastTrip(trip) {
    arrayOptions.keys.forEach(key => {
      console.log(key);
      let tripItem = trip[`${key}`];
      tripItem.forEach(item => {
        console.log(item);
        let keyOne = key[0];
        let keyTwo = key[1];
        let valOne = item[`${keyOne}`].val();
        let valTwo = item[`${keyTwo}`].val();
        console.log(option);
        createNewArrayItem(`.add${key}`, key , keyOne, keyTwo, valOne, valTwo);
      });
    });

    console.log(trip);

    $("form").attr('id') = trip.id;
    const updateFields = ["title", "place", "startDate", "endDate"];
    updateFields.forEach(field => {
      let input = `input[name=${field}]`;
      $("input").val(`${trip.field}`);

    });
    //
    // let transportationDetails = '';
    // trip.transportation.forEach(function (transportation) {
    //   transportationDetails += `<label>Enter the type of transportation for this trip.
    //     <input type="text" name="transType" value=${transportation.transType}>
    //   </label>
    //   <label>Enter more information about your transportation.
    //     <input type="text" name="transInformation" value=${transportation.transInformation}>
    //   </label>`
    // });
    //
    // let residenceDetails = '';
    // trip.residence.forEach(function (item) {
    //   residenceDetails += `<label>Enter the place you stayed at during your trip.
    //       <input type="text" name="residenceName" value=${item.stay}>
    //      </label>
    //      <label>Enter more information about your place of stay.
    //        <input type="text" name="residenceInformation" value=${item.residenceComments}>
    //      </label>`
    // });
    //
    // let restaurantDetails = '';
    // trip.restaurants.forEach(function (item) {
    //   restaurantDetails += `<label>Enter a restaurant you visited during your trip.
    //         <input type="text" name="restaurantName" value=${item.restaurantName}>
    //       </label>
    //       <label>Enter more information about the restaurant.
    //          <input type="text" name="restaurantInformation" value=${item.restaurantComments}>
    //       </label>`
    // });
    //
    // let activityDetails = '';
    // trip.activities.forEach(function (item) {
    //   activityDetails += `<label>Enter an activtiy you did during your trip.
    //       <input type="text" name="activityName" value=${item.activityName}>
    //     </label>
    //     <label>Enter more information about the activity.
    //       <input type="text" name="activityInformation" value=${item.activtiyInformation}>
    //     </label>`
    // });
  }

})(typeof exports === 'undefined' ? window : exports)
