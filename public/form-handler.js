(function (exports, $) {
  const handleInputs = exports.handleInputs;
  function FormHandler (selector) {
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
      const inputs = serialize(this, {hash: true});
      const item = handleInputs(inputs);
      callback(item);
      this.reset();
      this.elements[0].focus();
    });
  };

  exports.FormHandler = FormHandler;
})(typeof exports === 'undefined' ? window.app : exports, window.jQuery, window.serialize);
