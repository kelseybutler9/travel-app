const handleInputs = require('../public/handle-inputs');
const chai = require('chai');
require('chai').should();

const should = chai.should();

describe('handleInputs', function () {

  it('should return a trip object', function () {
    const data =
    {
      {name:'title',value:'New Trip'},
      {name:'place',value:'Chicago'},
      {name:'startDate',value:'October 2017'},
      {name:'endDate',value:'November 2017'},
      {name:'transType',value:'Flight'},
      {name:'transInformation',value:'Afternoon, 3pm'}
      {name:'residenceName',value:'Parents House'}
      {name:'residenceInformation',value:'Cozy'}
      {name:'restaurantName',value:'Hunans'}
      {name:'restaurantInformation',value:'Chinese Food'}
      {name:'activityName',value:'Sledding'}
      {name:'activityInformation',value:'Fun!'}
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
