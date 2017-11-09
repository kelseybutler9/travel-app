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
      const item = handleInputs(inputs);
      console.log(item);
      callback(item);
      this.reset();
      this.elements[0].focus();
    })
  }

  function handleInputs(inputs) {
    console.log(inputs);
    let trip = {transportation: [], residence: [], restaurants: [], activities: []};
      for(let i=0; i < inputs.length; i++) {
          if(inputs[i].name === "transType") {
            let transObject = {transType: inputs[i].value, transInformation: inputs[i+1].value}
            trip.transportation.push(transObject);
          }
          else if(inputs[i].name === "residenceName") {
            let resObject = {residenceName: inputs[i].value, residenceInformation: inputs[i+1].value}
            trip.residence.push(resObject);
          }
          else if(inputs[i].name === "restaurantName") {
            let restObject = {restaurantName: inputs[i].value, restaurantInformation: inputs[i+1].value}
            trip.restaurants.push(restObject);
          }
          else if(inputs[i].name === "activityName") {
            let actObject = {activityName: inputs[i].value, activityInformation: inputs[i+1].value}
            trip.activities.push(actObject);
          }
          else if(inputs[i].name === "title" || inputs[i].name === "place" || inputs[i].name === "startDate" || inputs[i].name === "endDate") {
            trip[inputs[i].name] = inputs[i].value;
          }
          else {
            console.log('skipped');
          }
    }

    return trip;
  }

  exports.FormHandler = FormHandler;
})(typeof exports === 'undefined' ? window.app = {} : exports, window.jQuery)
