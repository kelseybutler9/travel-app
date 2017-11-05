
(function (exports, $) {
  function FormHandler (selector) {
    console.log(selector);
    if (!selector) {
      throw new Error('No selector provided.')
    }

    this.$formElement = $(selector)
    if (this.$formElement.length === 0) {
      throw new Error(`Could not find element with selector: ${selector}.`)
    }
  }

  FormHandler.prototype.addSubmitHandler = function (callback) {
    this.$formElement.on('submit', function (e) {
      console.log("add submit ran");
      e.preventDefault();
      const inputs = $(this).serializeArray();
      const data = handleInputs(inputs);
      callback(data);
      $('.success-screen').prop("hidden", false);
      this.reset();
      this.elements[0].focus();
    })
  }

  function handleInputs(inputs) {
    console.log(inputs);
    let trip = {transportation: [{}], residence: [{}], restaurants: [{}], activities: [{}]};
    console.log(trip);
    inputs.forEach(field => {
      console.log(field);
      if(field.name === "transType") {
        //trip.transportation.push({transType:field.value});
        trip.transportation[trip.transportation.length - 1].transType = field.value;
      }
      else if (field.name === "transInformation") {
        trip.transportation[trip.transportation.length - 1].transInformation = field.value;
      }
      else if(field.name === "residenceName") {
        //trip.residence.push({residenceName:field.value});
        trip.residence[trip.residence.length - 1].residenceName = field.value;
      }
      else if (field.name === "residenceInformation") {
        trip.residence[trip.residence.length - 1].residenceInformation = field.value;
      }
      else if(field.name === "restaurantName") {
        //trip.restaurants.push({restaurantName:field.value});
        trip.restaurants[trip.restaurants.length - 1].restaurantName = field.value;
      }
      else if (field.name === "restaurantInformation") {
        trip.restaurants[trip.restaurants.length - 1].restaurantInformation = field.value;
      }
      else if(field.name === "activityName") {
        //trip.activities.push({activityName:field.value});
        trip.activities[trip.activities.length - 1].activityName = field.value;
      }
      else if (field.name === "activityInformation") {
        trip.activities[trip.activities.length - 1].activityInformation = field.value ;
      }
      else {
        trip[`${field.name}`] = field.value;
      }
      console.log('trip:' + trip);
    });

    return trip;
  }

  exports.FormHandler = FormHandler;
})(typeof exports === 'undefined' ? window.app = {} : exports, window.jQuery)
