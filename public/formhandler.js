(function (exports, $) {
  function FormHandler (selector) {
    console.log(selector);
    if (!selector) {
      throw new Error('No selector provided.');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error(`Could not find element with selector: ${selector}.`);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (callback) {
    this.$formElement.on('submit', function (e) {
      e.preventDefault();
      const inputs = $(this).serializeArray();
      const item = handleInputs(inputs);
      callback(item);
      this.reset();
      this.elements[0].focus();
    })
  }

  function handleInputs (inputs) {
    let arrayOptions = {transportation: ['transType', 'transInformation'], residence: ['residenceName', 'residenceInformation'], restaurants: ['restaurantName', 'restaurantInformation'], activities: ['activityName', 'activityInformation']};
    let trip = {title: '', place: '', startDate: '', endDate: '', transportation: [], residence: [], restaurants: [], activities: []};

    for (let i = 0; i < inputs.length; i++) {
      let arrayKeys = Object.keys(arrayOptions);
      let inputOne = inputs[i];
      let inputTwo = inputs[i + 1];
      if (inputOne.name === 'title' || inputOne.name === 'place' || inputOne.name === 'startDate' || inputOne.name === 'endDate') {
        trip[`${inputOne.name}`] = inputOne.value;
      }
      else {
        let newObject = {};
        arrayKeys.forEach(key => {
          let tripArray = trip[key];
          let item = arrayOptions[key];
          if (inputOne.name===item[0]) {
            newObject[item[0]] = inputOne.value;
            newObject[item[1]] = inputTwo.value;
            tripArray.push(newObject);
          }
        });
      }
    }
    console.log(trip);
    return trip;
  }

  exports.FormHandler = FormHandler;
})(typeof exports === 'undefined' ? window.app = {} : exports, window.jQuery);
