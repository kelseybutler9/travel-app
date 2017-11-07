(function (exports) {
  console.log(exports);
  const {FormHandler, DataStore, Trip} = exports.app;
  const formHandler = new FormHandler('[data-trips="form"]');
  const url = 'http://localhost:8080/trips';
  const formClass = $("form").attr('class');
  const trip = new Trip(new DataStore(url));


  formHandler.addSubmitHandler((data) => {
    if(formClass === "new") {
      console.log("add to database");
      trip.createTrip(data);//clean up the function names
    }
    else {
      console.log("update database");
      trip.updateTrip(data);
    }
  });

  if(formClass === "edit") {
    const tripId = $("form").attr('id');
    console.log(tripId);
    trip.viewPastTrip(tripId, displayPastTrip);
  }

  $('.success-screen').prop("hidden", true);
  $('.delete-screen').prop("hidden", true);

  $('.button-delete').on("click", function() {
    trip.removeTrip(tripId);
  });


  $('.new-addTrans').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-addTrans', 'transType', 'transInformation');
    //const newarrayItem = new ArrayItem('.new-trans');
    //sample for addarrayitem
    //createNewResidenceItem('.new-trans');
    //newarrayItem.createNewTransItem("transportation", "transType", "transInformation");
  });

  $('.new-addResidence').click(function(event) {
  	event.preventDefault();
    //createNewResidenceItem('.new-residence');
    createNewArrayItem('.new-addResidence', 'residenceName', 'residenceInformation');
  });

  $('.new-addRestaurant').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-addRestaurant', 'restaurantName', 'restaurantInformation');
    //createNewRestaurantItem('.new-restaurant');
  });

  $('.new-addActivity').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.new-addActivity', 'activityName', 'activityInformation');
    //createNewActivityItem('.new-activity');
  });

  $('.edit-addTrans').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-addTrans', 'transType', 'transInformation');
    //ArrayItem.createNewTransItem('.edit-trans');
  });

  $('.edit-addResidence').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-addResidence', 'residenceName', 'residenceInformation');
    //createNewResidenceItem('.edit-residence');
  });

  $('.edit-addRestaurant').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-addRestaurant', 'restaurantName', 'restaurantInformation');
    //createNewRestaurantItem('.edit-restaurant');
  });

  $('.edit-addActivity').click(function(event) {
  	event.preventDefault();
    createNewArrayItem('.edit-addActivity', 'activityName', 'activityInformation');
    //createNewActivityItem('.edit-activity');
  });

  function createNewArrayItem(className, firstName, secondName) {
    $(className).append(`<label>Enter the type of ${type} for this trip.
      <input type="text" name="${firstName}"></label><label>Enter more information about your ${type}.
      <input type="text" name="${secondName}"></label>`);
  }
  // function createNewTransItem(classString) {
  //   $(classString).append(`<label>Enter the type of transportation for this trip.
  //     <input type="text" name="transType"></label><label>Enter more information about your transportation.
  //     <input type="text" name="transInformation"></label>`);
  // }
  //
  // function createNewResidenceItem(classString) {
  //   $(classString).append(`<label>Enter the place you stayed at during your trip.
  //     <input type="text" name="stay"></label><label>Enter more information about your place of stay.
  //     <input type="text" name="residenceInformation"></label>`);
  // }
  //
  // function createNewRestaurantItem(classString) {
  //   $(classString).append(`<label>Enter a restaurant you visited during your trip.
  //     <input type="text" name="restaurantName"></label><label>Enter more information about the restaurant.
  //     <input type="text" name="restaurantInformation"></label>`);
  // }
  //
  // function createNewActivityItem(classString) {
  //   $(classString).append(`<label>Enter an activtiy you did during your trip.
  //     <input type="text" name="activityName"></label><label>Enter more information about the activity.
  //     <input type="text" name="activityInformation"></label>`);
  // }

  function displayPastTrip(trip) {
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
