(function (exports) {
  console.log(exports);

  function handleInputs(inputs) {

  let newInputs = inputs;
  let inputKeys = Object.keys(newInputs);

  inputKeys.forEach(key => {
    let newItem = newInputs[key];
    console.log(newItem);
    if(typeof newItem === 'object') {
      let arrayKeys = Object.keys(newItem);
      let firstKey = arrayKeys[0];
      let secondKey = arrayKeys[1];
      let newArray = [];
      console.log(newItem[firstKey]);

      newItem[firstKey].forEach((item, index) => {
        let newObject = {firstKey: firstKey[index], secondKey: secondKey[index]};
        newArray.push(newObject);
      })
      newInputs[key] = newArray;
    }
  })
  console.log(inputKeys);
  return newInputs;
}

exports.handleInputs = handleInputs;
})(typeof exports === 'undefined' ? window.app = {} : exports);
