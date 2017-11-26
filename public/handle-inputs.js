(function (exports) {
  function handleInputs(inputs) {
    let newInputs = inputs;
    let inputKeys = Object.keys(newInputs);
    inputKeys.forEach(key => {
      let newItem = newInputs[key];
      if(typeof newItem === 'object') {
        let arrayKeys = Object.keys(newItem);
        let firstKey = arrayKeys[0];
        let secondKey = arrayKeys[1];
        let newArray = [];
        newItem[firstKey].forEach((item, index) => {
          let newObject = {};
          newObject[`${firstKey}`] = item;
          newObject[`${secondKey}`] = newItem[secondKey][index];
          newArray.push(newObject);
        })
        newInputs[key] = newArray;
      }
    })
    return newInputs;
  }

exports.handleInputs = handleInputs;
})(typeof exports === 'undefined' ? window.app = {} : exports);
