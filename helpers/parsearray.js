function parseArray (topic, firstKey, secondKey) {
  let itemArray = [];
  for (let i = 0; i < topic.length; i++) {
    let item = topic[i];
    let newObject = {};
    // newObject = {newObject[firstKey]: item[firstKey], newObject[secondKey]: item[secondKey]};
    newObject[firstKey] = item[firstKey];
    newObject[secondKey] = item[secondKey];
    itemArray.push(newObject);
  }

  return itemArray;
}

module.exports = parseArray;
