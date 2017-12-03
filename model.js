const mongoose = require('mongoose');
const parseArray = require('./helpers/parsearray');

const tripSchema = mongoose.Schema({
  'title': {type: String, required: true},
  'place': String,
  'startDate': Date,
  'endDate': Date,
  'transportation': [{
    'transType': String,
    'transInformation': String}],
  'residence': [{
    'residenceName': String,
    'residenceInformation': String}],
  'restaurants': [{
    'restaurantName': String,
    'restaurantInformation': String}],
  'activities': [{
    'activityName': String,
    'activityInformation': String}]
});

tripSchema.methods.apiRepr = function () {
  return {
    id: this._id,
    title: this.title,
    place: this.place,
    startDate: this.startDate,
    endDate: this.endDate,
    transportation: parseArray(this.transportation, 'transType', 'transInformation'),
    residence: parseArray(this.residence, 'residenceName', 'residenceInformation'),
    restaurants: parseArray(this.restaurants, 'restaurantName', 'restaurantInformation'),
    activities: parseArray(this.activities, 'activityName', 'activityInformation')
  };
};

const Trip = mongoose.model('Trip', tripSchema);

module.exports = {Trip};
