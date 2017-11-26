const handleInputs = require('../public/handle-inputs');
const chai = require('chai');
require('chai').should();

const should = chai.should();

describe('handleInputs', function () {

  it('should return a trip object', function () {
    const data =
    { {title: "New Trip", place: "lkjsdflkj", startDate: "sdkljfkls", endDate: "sldkjf", transportation: {…}, …}
      {title:'New Trip',
       place:'Chicago',
       startDate:'October 2017',
       endDate:'November 2017',
       transportation: {transType: ['Flight'], activityInformation: ['Afternoon, 3pm']},
       residence: {residenceName: ['Parents Home'], residenceInformation: ['Cozy']},
       restaurants: {restaurantName: ['Hunans'], restaurantInformation: ['Chinese Food']},
       activities: {activityName: ['Sledding'], activityInformation: ['Fun!']}
    };

    const trip = handleInputs(data);

    trip.should.be.an('object');
    trip.should.have.length.of.at.least(1);
    trip.should.include.keys('title', 'place', 'startDate', 'endDate', 'transportation', 'residence', 'restaurants', 'activities');
    trip.title.should.be.a('string');
    trip.place.should.be.a('string');
    trip.startDate.should.be.a('string');
    trip.endDate.should.be.a('string');
    trip.transportation.should.be.a('array');
    trip.transportation.should.have.length.of.at.least(1);
    trip.residence.should.be.a('array');
    trip.residence.should.have.length.of.at.least(1);
    trip.restaurants.should.be.a('array');
    trip.restaurant.should.have.length.of.at.least(1);
    trip.activities.should.be.a('array');
    trip.activities.should.have.length.of.at.least(1);

    trip.transportation.should.include.keys('transType', 'transInformation');
    trip.residence.should.include.keys('residenceName', 'residenceInformation');
    trip.restaurants.should.include.keys('restaurantName', 'restaurantInformation');
    trip.activities.should.include.keys('activityName', 'activityInformation');

  });
});
