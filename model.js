const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    "title": {type: String, required: true},
    "place": String,
    "startDate": String,
    "endDate": String,
    "transportation": [{
        "transType": String,
        "transInformation": String}],
    "residence": [{
        "residenceName": String,
        "residenceInformation": String}],
    "restaurants": [{
        "restaurantName": String,
        "restaurantInformation": String}],
    "activities": [{
        "activityName": String,
        "activtiyInformation": String}]
});

tripSchema.methods.apiRepr = function() {
    function parseArrays(topic, firstKey, secondKey) {
          let itemArray = [];
          for(i=0; i< topic.length; i++) {
              let item = topic[i];
              let newObject = {};
              newObject[firstKey] = item[firstKey];
              newObject[secondKey] = item[secondKey];
              console.log(newObject);
              itemArray.push(newObject);
          }
        return itemArray;
      }
    return {
      id: this._id,
      title: this.title,
      place: this.place,
      startDate: this.startDate,
      endDate: this.endDate,
      transportation: parseArrays(this.transportation, "transType", "transInformation"),
      residence: parseArrays(this.residence, "residenceName", "residenceInformation"),
      restaurants: parseArrays(this.restaurants, "restaurantName", "restaurantInformation"),
      activities: parseArrays(this.activities, "activityName", "activityInformation")
  };
}



const Trip = mongoose.model('Trip', tripSchema);

module.exports = {Trip};
