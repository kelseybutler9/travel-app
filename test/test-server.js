const chai = require('chai');
const chaiHttp = require('chai-http');
const {app,runServer,closeServer} = require('../server.js');

const should = chai.should();


chai.use(chaiHttp);

describe('Trips', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should list trips on GET', function() {
    return chai.request(app)
      .get('/trips')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.length.of.at.least(1);

        res.body.forEach(function(item) {
          item.should.be.a('object');
          item.should.include.keys('id', 'title', 'location', 'startDate', 'endDate', 'travel', 'residence', 'restaurants', 'activities');
        });
      });
  });

  it('should add a trip on POST', function() {
    const newTrip = {
            title: "Vacation Test",
            place: "Chicago, Illinois",
            startDate: "10201992",
            endDate: "10301992",
            transportation: [{
              transType: "Flight",
              transInformation: "Afternoon flight, $700" }],
            residence: [{
              residenceName: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            restaurants: [{
              restaurantName: "Taco Bell",
              restaurantComments: "great burritos" }],
            activities: [{
              activityName: "Surfing",
              activtiyInformation: "Fun!"
            }]
    };

    return chai.request(app)
      .post('/trips')
      .send(newTrip)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.include.keys('id', 'title', 'location', 'startDate', 'endDate', 'travel', 'residence', 'restaurants', 'activities');
        res.body.title.should.equal(newTrip.title);
        res.body.place.should.equal(newTrip.place);
        res.body.startDate.should.equal(newTrip.startDate);
        res.body.endDate.should.equal(newTrip.endDate);
        res.body.transportation.should.be.a('array');
        res.body.transportation.should.include.members(newTrip.transportation);
        res.body.residence.should.be.a('array');
        res.body.residence.should.include.members(newTrip.residence);
        res.body.restaurants.should.be.a('array');
        res.body.restaurants.should.include.members(newTrip.restaurants);
        res.body.activities.should.be.a('array');
        res.body.activities.should.include.members(newTrip.activities);
      });
  });

  it('should update trips on PUT', function() {
      const newTrip = {
            title: "Vacation Test",
            place: "Cleveland, Ohio",
            startDate: "10201992",
            endDate: "10301992",
            transportation: [{
              transType: "Flight",
              transInformation: "Afternoon flight, $700" }],
            residence: [{
              residenceName: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            restaurants: [{
              restaurantName: "Taco Bell",
              restaurantComments: "great burritos" }],
            activities: [{
              activityName: "Surfing",
              activtiyInformation: "Fun!"
            }]
    };

    return chai.request(app)
      .get('/trips')
      .then(function(res) {
        updateData.id = res.body[0].id;

        return chai.request(app)
          .put(`/trips/${updateData.id}`)
          .send(updateData);
      })
      .then(function(res) {
        res.should.have.status(204);
      });
  });

  it('should delete trips on DELETE', function() {
    return chai.request(app)
      .get('/trips')
      .then(function(res) {
        return chai.request(app)
          .delete(`/trips/${res.body[0].id}`)
      })
      .then(function(res) {
        res.should.have.status(204);
      });
  });
});
