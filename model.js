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
    let transArray = [];
    let residenceArray = [];
    let restArray = [];
    let activityArray = [];
    function parseArrays(array, object, firstKey, secondKey) {
//       this.object.forEach(function (item) {
          console.log(array);
                array.push({firstKey: this.item.firstKey, secondKey: this.item.secondKey});
        }
        return array;

// }
  return {
    id: this._id,
    title: this.title,
    place: this.place,
    startDate: this.startDate,
    endDate: this.endDate,
    //transportation: [{transType: this.transportation[0].transType, transInformation: this.transportation[0].transInfromation }],
    //residence: [{
              //residenceName: this.residence.residenceName,
             // residenceInformation: this.residence.residenceInformation}],
    //restaurants: [{
              //restaurantName: this.restaurants.restaurantName,
             // restaurantInformation: this.restaurants.restaurantInformation}],
    //activities: [{
             // activityName: this.activities.activityName,
              //activtiyInformation: this.activities.activityInformation
              //  }]
      transportation: parseArrays(transArray, "transportation", "transType", "transInformation"),
      residence: parseArrays(residenceArray, "residence", "residenceName", "residenceInformation"),
      restaurants: parseArrays(restArray, "restaurants", "restaurantName", "restaurantInformation"),
      activities: parseArrays(activityArray, "activities", "activityName", "activityInformation")
  };
}



const Trip = mongoose.model('Trip', tripSchema);

module.exports = {Trip};
