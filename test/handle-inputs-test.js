const handleInputs = require('../public/handle-inputs');
const chai = require('chai');
require('chai').should();

const should = chai.should();

describe('handleInputs', function () {

  it('should return a trip object', function () {
    const data =
    {
       title:'New Trip',
       place:'Chicago',
       startDate:'2017-10-20',
       endDate:'2017-10-31',
       transportation: {transType: ['Flight'], transInformation: ['Afternoon, 3pm']},
       residence: {residenceName: ['Parents Home'], residenceInformation: ['Cozy']},
       restaurants: {restaurantName: ['Hunans'], restaurantInformation: ['Chinese Food']},
       activities: {activityName: ['Sledding'], activityInformation: ['Fun!']}
    };

    const trip = handleInputs.handleInputs(data);

    trip.should.be.an('object');
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
    trip.restaurants.should.have.length.of.at.least(1);
    trip.activities.should.be.a('array');
    trip.activities.should.have.length.of.at.least(1);
    trip.transportation[0].should.include.keys('transType', 'transInformation');
    trip.residence[0].should.include.keys('residenceName', 'residenceInformation');
    trip.restaurants[0].should.include.keys('restaurantName', 'restaurantInformation');
    trip.activities[0].should.include.keys('activityName', 'activityInformation');

  });
});
