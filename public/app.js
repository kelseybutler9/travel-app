(function (exports) {
  console.log(exports);
  const {FormHandler, DataStore, Trip} = exports.app;
  const formHandler = new FormHandler('[data-trips="form"]');
  const url = 'http://localhost:8080/trips';
  const formClass = $("form").attr('class');
  const trip = new Trip(new DataStore(url));

  hidePopup(`.delete-screen`);
  hidePopup(`.success-screen`);

  function displayPopup(className) {
    $(className).prop("hidden", false);
  }

  function hidePopup(className) {
    $(className).prop("hidden", true);
  }

  formHandler.addSubmitHandler((trip) => {
    if(formClass === "new") {
      console.log("add to database");
      trip.create(trip, displayPopup, '.success-screen');
    }
    else {
      console.log("update database");
      trip.updateItem(data);
    }
  });

  if(formClass === "edit") {
    const tripId = $("form").attr("id");
    console.log(tripId);
    trip.viewItem(tripId, displayPastTrip);
  }

  $('.button-delete').on("click", function() {
    trip.removeItem(tripId, displayPopup, '.delete-screen');
  });


 $('.new-addTrans').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-trans', 'transportation', 'transType', 'transInformation');

  });

  $('.new-addResidence').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-residence', 'residence', 'residenceName', 'residenceInformation');
  });

  $('.new-addRestaurant').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-restaurant', 'restaurant', 'restaurantName', 'restaurantInformation');
  });

  $('.new-addActivity').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-activity', 'activity', 'activityName', 'activityInformation');
  });

  $('.edit-addTrans').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-trans', 'transportation', 'transType', 'transInformation');
  });

  $('.edit-addResidence').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-residence', 'residence', 'residenceName', 'residenceInformation');
  });

  $('.edit-addRestaurant').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-restaurant', 'restaurant', 'restaurantName', 'restaurantInformation');
  });

  $('.edit-addActivity').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-activity', 'activity', 'activityName', 'activityInformation');
  });

  function createNewArrayItem(className, topic, firstName, secondName) {
    $(className).append(`<label>Enter the type of ${topic} for this trip.
      <input type="text" name="${firstName}"></label><label>Enter more information about your ${topic}.
      <input type="text" name="${secondName}"></label>`);
  }

  function displayPastTrip(trip) {
    console.log(trip);
    let transportationDetails = '';
    trip.transportation.forEach(function (transportation) {
      transportationDetails += `<label>Enter the type of transportation for this trip.
        <input type="text" name="transType" value=${transportation.transType}>
      </label>
      <label>Enter more information about your transportation.
        <input type="text" name="transInformation" value=${transportation.transInformation}>
      </label>`
    });

    let residenceDetails = '';
    trip.residence.forEach(function (item) {
      residenceDetails += `<label>Enter the place you stayed at during your trip.
          <input type="text" name="residenceName" value=${item.stay}>
         </label>
         <label>Enter more information about your place of stay.
           <input type="text" name="residenceInformation" value=${item.residenceComments}>
         </label>`
    });

    let restaurantDetails = '';
    trip.restaurants.forEach(function (item) {
      restaurantDetails += `<label>Enter a restaurant you visited during your trip.
            <input type="text" name="restaurantName" value=${item.restaurantName}>
          </label>
          <label>Enter more information about the restaurant.
             <input type="text" name="restaurantInformation" value=${item.restaurantComments}>
          </label>`
    });

    let activityDetails = '';
    trip.activities.forEach(function (item) {
      activityDetails += `<label>Enter an activtiy you did during your trip.
          <input type="text" name="activityName" value=${item.activityName}>
        </label>
        <label>Enter more information about the activity.
          <input type="text" name="activityInformation" value=${item.activtiyInformation}>
        </label>`
    });

    $(".edit-trans").html(transportationDetails);
    $(".edit-residence").html(residenceDetails);
    $(".edit-restaurants").html(restaurantDetails);
    $(".edit-activity").html(activityDetails);

    $("form").attr('id') = trip.id;
    const updateFields = ["title", "place", "startDate", "endDate"];
    updateFields.forEach(field => {
      let input = `input[name=${field}]`;
      $("input").val(`${trip.field}`);
    });
  }

})(typeof exports === 'undefined' ? window : exports)
