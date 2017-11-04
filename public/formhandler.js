
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
      $('.success-screen').prop(hidden, false);
      this.reset();
      this.elements[1].focus();
    })
  }

  function handleInputs(inputs) {
    console.log(inputs);
    let trip = {travel: [], residence: [], restaurants: [], activities: []};
    let field = {};
    inputs.forEach(field => {
    // for(i=0 ;i < inputs.length; i++) {//foreach
      // field = inputs[i];
      console.log(field);
      if(field.name === "transType") {
        trip.travel.push({transType:field.value});
      }
      else if (field.name === "transInformation") {
        trip.travel[trip.travel.length - 1].transInformation = field.value ;
      }
      else if(field.name === "residenceName") {
        trip.travel.push({residenceName:field.value});
      }
      else if (field.name === "residenceInformation") {
        trip.travel[trip.travel.length - 1].residenceInformation = field.value ;
      }
      else if(field.name === "restaurantName") {
        trip.travel.push({restaurantName:field.value});
      }
      else if (field.name === "restaurantInformation") {
        trip.travel[trip.travel.length - 1].restaurantInformation = field.value ;
      }
      else if(field.name === "activityName") {
        trip.travel.push({activityName:field.value});
      }
      else if (field.name === "activityInformation") {
        trip.travel[trip.travel.length - 1].activityInformation = field.value ;
      }
      else {
        trip[field.name] = field.value;
      }
    });
    console.log(trip);
    return trip;
  }

  exports.FormHandler = FormHandler;
})(typeof exports === 'undefined' ? window.app = {} : exports, window.jQuery)
