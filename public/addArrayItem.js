(function (exports, $) {
  function ArrayItem (selector) {
    if (!selector) {
      throw new Error('No selector provided.')
    }

    this.$element = $(selector)
    if (this.$element.length === 0) {
      throw new Error(`Could not find element with selector: ${selector}.`)
    }
  }

  ArrayItem.prototype.createNewItem = function(callback) {
    $(`button`).click(function (e) {
    e.preventDefault();
    let myClass = this.className;
    const arrayOptions = {Transportation: ['transType', 'transInformation'], Residence: ['residenceName', 'residenceInformation'], Restaurant: ['restaurantName', 'restaurantInformation'], Activity: ['activityName', 'activityInformation']};
    let option = arrayOptions[`${this.element}`];
    callback(`add${this.$element}`, this.element , option[0], option[1]);

    // $(this.$element).append(`<label>Enter the type of ${type} for this trip.
    //   <input type="text" name="${firstName}"></label><label>Enter more information about your ${type}.
    //   <input type="text" name="${secondName}"></label>`);
  }

})

})(typeof exports === 'undefined' ? window.app : exports)
