const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    "title": {type: String, required: true},
    "place": [{City: String, State: String}],
    "startDate": {type: Date},
    "endDate": {type: Date},
    "transportation": [{
        transType: String,
        transInformation:String }],
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

tripSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    place: {this.City, this.State },
    startDate: this.startDate,
    endDate: this.endDate,
    transportation: [{transType: this.transType, transInformation: this.transInfromation }],
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
