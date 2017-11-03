const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    "title": {type: String, required: true},
    "location": [{City: String, State: String}],
    "startDate": {type: Date},
    "endDate": {type: Date},
    "travel": [{
        travelType: String,
        travelInformation:String }],
    "residence": [{
        residenceName: String,
        residenceInformation: String}],
    "restaurants": [{
        restaurantName: String,
        restaurantInformation: String}],
    "activities": [{
        activityName: String,
        activtiyInformation: String
    }]
});
//example
// tripSchema.virtual('authorName').get(function() {
//   return `${this.author.firstName} ${this.author.lastName}`.trim();
// });

tripSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    location: {this.City, this.State },
    startDate: this.startDate,
    endDate: this.endDate,
    travel: [{travelType: this.travelType, travelInformation: this.travelInfromation }],
    residence: [{
              residenceName: this.stay,
              residenceInformation: this.residenceComments}],
    restaurants: [{
              restaurantName: this.name,
              restaurantInformation: this.comments}],
    activities: [{
              activityName: this.activityName,
              activtiyInformation: this.activityInformation
                }]
  };
}

const Trip = mongoose.model('Trip', tripSchema);

module.exports = {tripSchema};
