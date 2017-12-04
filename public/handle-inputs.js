(function (exports) {
  function handleInputs (inputs) {
    let newInputs = inputs;
    let inputKeys = Object.keys(newInputs);
    inputKeys.forEach(key => {
      let newItem = newInputs[key];
      if (typeof newItem === 'object') {
        let arrayKeys = Object.keys(newItem);
        let newArray = [];
        newItem[arrayKeys[0]].forEach((item, index) => {
          let newObject = {};
          newObject[arrayKeys[0]] = item;
          newObject[arrayKeys[1]] = newItem[arrayKeys[1]][index];
          newArray.push(newObject);
        });
        newInputs[key] = newArray;
      }
    });
    return newInputs;
  }

  exports.handleInputs = handleInputs;
})(typeof exports === 'undefined' ? window.app = {} : exports);
