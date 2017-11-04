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

  // ArrayItem.prototype.createNewItem = function(classString, type, firstName, secondName) {
  //   // $("this.$element:button").on("click", function() {
  //   //
  //   // })
  //   $(classString).append(`<label>Enter the type of ${type} for this trip.
  //     <input type="text" name="${firstName}"></label><label>Enter more information about your ${type}.
  //     <input type="text" name="${secondName}"></label>`);
  // }
})


//////////////////////////////
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
})(typeof exports === 'undefined' ? window.app = {} : exports, window.jQuery)
