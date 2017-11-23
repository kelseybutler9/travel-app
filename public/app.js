(function (exports) {
  const {FormHandler, DataStore, Trip} = exports.app;
  const formHandler = new FormHandler('[data-trips="form"]');
  const url = 'http://localhost:8080/trips';
  const formClass = $("form").attr('class');
  const trip = new Trip(new DataStore(url));
  const arrayOptions = {transportation: ['transType', 'transInformation'], residence: ['residenceName', 'residenceInformation'], restaurants: ['restaurantName', 'restaurantInformation'], activities: ['activityName', 'activityInformation']};

  hidePopup(`.delete-screen`);
  hidePopup(`.success-screen`);

  function displayPopup(className) {
    $(className).prop("hidden", false);
  }

  function hidePopup(className) {
    $(className).prop("hidden", true);
  }

  if(formClass === "edit") {
    let tripId = getEditId(window.location.pathname);
    trip.viewItem(tripId, displayPastTrip);
  }

  formHandler.addSubmitHandler((data) => {
    if(formClass === "new") {
      trip.create(data);
      displayPopup('.success-screen');
    }
    else {
      let tripId = getEditId(window.location.pathname);
      data.id = tripId;
      trip.updateItem(tripId, data);
      displayPopup('.success-screen');
    }
  });

  function getEditId(currentLocation) {
    tripId = currentLocation.split("/").pop();
    return tripId;
  }

  $(`button[type="button"]`).click(function (e) {
    e.preventDefault();
    let myClass = this.className;
    let option = arrayOptions[`${myClass}`];
    createNewArrayItem(`.add${myClass}`, myClass , option[0], option[1], "", "");
  });

  $('.button-delete').on("click", function(e) {
    e.preventDefault();
    let tripId = getEditId(window.location.pathname);
    trip.viewItem(tripId, function(res) {
      trip.removeItem(res, tripId);
    });
    displayPopup('.delete-screen');
  });

  function createNewArrayItem(className, topic, firstName, secondName, valOne, valTwo) {
    $(className).append(`<label>Enter the type of ${topic} for this trip.
      <input type="text" name="${firstName}" value="${valOne}"></label><label>Enter more information about your ${topic}.
      <input type="text" name="${secondName}" value="${valTwo}"></label>`);
  }

  function displayPastTrip(trip) {
    let arrayKeys = Object.keys(arrayOptions);
    arrayKeys.forEach(key => {
      let tripItem = trip[`${key}`];
      tripItem.forEach(item => {
        let itemKeys = Object.keys(item);
        let keyOne = itemKeys[0];
        let keyTwo = itemKeys[1];
        let valOne = item[`${keyOne}`];
        let valTwo = item[`${keyTwo}`];
        createNewArrayItem(`.add${key}`, key , keyOne, keyTwo, valOne, valTwo);
      });
    });

    const updateFields = ["title", "place", "startDate", "endDate"];
    updateFields.forEach(field => {
      let inputField = `input[name=${field}]`;
      let tripField = trip[field];
      $(`${inputField}`).val(tripField);
    });
  }

})(typeof exports === 'undefined' ? window : exports)
