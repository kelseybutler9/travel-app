(function (exports) {
  const {FormHandler, DataStore, Trip} = exports.app;
  const formHandler = new FormHandler('[data-trips="form"]');
  const url = 'http://localhost:8080/trips';
  const formClass = $('form').attr('class');
  const trip = new Trip(new DataStore(url));
  const arrayOptions = {transportation: ['transType', 'transInformation'], residence: ['residenceName', 'residenceInformation'], restaurants: ['restaurantName', 'restaurantInformation'], activities: ['activityName', 'activityInformation']};

  hidePopup(`.delete-screen`);
  hidePopup(`.success-screen`);

  const fpStartDate = flatpickr('[name="startDate"]', {dateFormat: 'm-d-Y'});
  const fpEndDate = flatpickr('[name="endDate"]', {dateFormat: 'm-d-Y'});

  $('[name="startDate"]').on('blur', function (e) {
    fpEndDate.set('disable', [function (date) {
      let endDate = moment(date);
      let startDate = moment(fpStartDate.selectedDates[fpStartDate.selectedDates.length - 1]);
      return endDate < startDate;
    }]);
  });

  function displayPopup (className) {
    $(className).prop('hidden', false);
  }

  function hidePopup (className) {
    $(className).prop('hidden', true);
  }

  if (formClass === 'edit') {
    let tripId = getEditId(window.location.pathname);
    trip.viewItem(tripId, displayPastTrip);
  }

  formHandler.addSubmitHandler((data) => {
    if (formClass === 'new') {
      trip.create(data);
      displayPopup('.success-screen');
    } else {
      let tripId = getEditId(window.location.pathname);
      data.id = tripId;
      trip.updateItem(tripId, data);
      displayPopup('.success-screen');
    }
  });

  function getEditId (currentLocation) {
    tripId = currentLocation.split('/').pop();
    return tripId;
  }

  $(`button[type="button"]`).click(function (e) {
    e.preventDefault();
    let myClass = this.className;
    let option = arrayOptions[myClass];
    createNewArrayItem(`.add${myClass}`, myClass, option[0], option[1], '', '');
  });

  $('.button-delete').on('click', function (e) {
    e.preventDefault();
    let tripId = getEditId(window.location.pathname);
    trip.viewItem(tripId, function (res) {
      trip.removeItem(res, tripId);
    });
    displayPopup('.delete-screen');
  });

  function createNewArrayItem (className, topic, firstName, secondName, valOne, valTwo) {
    let value = $(`${className}`).children().length;
    value = (value / 2) + 1;
    $(className).append(`<label>Enter the type of ${topic} for this trip.
      <input type="text" name="${topic}[${firstName}][${value}]" value="${valOne}" required></label><label>Enter more information about your ${topic}.
      <input type="text" name="${topic}[${secondName}][${value}]" value="${valTwo}" required></label>`);
  }

  function displayPastTrip (trip) {
    let arrayKeys = Object.keys(arrayOptions);
    const updateFields = ['title', 'place', 'startDate', 'endDate'];

    arrayKeys.forEach(key => {
      let tripItem = trip[`${key}`];
      tripItem.forEach(item => {
        let itemKeys = Object.keys(item);
        createNewArrayItem(`.add${key}`, key, itemKeys[0], itemKeys[1], item[itemKeys[0]], item[itemKeys[1]]);
      });
    });

    updateFields.forEach(field => {
      let inputField = `input[name=${field}]`;
      let tripField = trip[field];
      if (field === 'startDate' || field === 'endDate') {
        tripField = moment(tripField).format('MM-DD-YYYY');
      }
      $(`${inputField}`).val(tripField);
    });
  }
})(typeof exports === 'undefined' ? window : exports);
