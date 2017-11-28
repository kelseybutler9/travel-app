const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, runServer, closeServer} = require('../server.js');
const newTrip = require('./fixtures/new-trip');
const updateTrip = require('./fixtures/update-trip');

const should = chai.should();

chai.use(chaiHttp);

describe('Trips', function () {

  before(function () {
    return runServer();
  });

  after(function () {
    return closeServer();
  });

  it('should list trips on GET', function () {
    return chai.request(app)
      .get('/trips')
      .then(function (res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.length.of.at.least(1);

        res.body.forEach(function (item) {
          item.should.be.a('object');
          item.should.include.keys('id', 'title', 'place', 'startDate', 'endDate', 'transportation', 'residence', 'restaurants', 'activities');
        });
      });
  });

  it('should add a trip on POST', function () {

    return chai.request(app)
      .post('/trips')
      .send(newTrip)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.include.keys('id', 'title', 'place', 'startDate', 'endDate', 'transportation', 'residence', 'restaurants', 'activities');
        res.body.title.should.be.a('string');
        res.body.place.should.be.a('string');
        res.body.startDate.should.be.a('string');
        res.body.endDate.should.be.a('string');
        res.body.title.should.equal(newTrip.title);
        res.body.place.should.equal(newTrip.place);
        res.body.startDate.should.equal(newTrip.startDate);
        res.body.endDate.should.equal(newTrip.endDate);
        res.body.transportation.should.be.a('array');
        res.body.residence.should.be.a('array');
        res.body.restaurants.should.be.a('array');
        res.body.activities.should.be.a('array');
        res.body.transportation.should.have.deep.members(newTrip.transportation);
        res.body.residence.should.have.deep.members(newTrip.residence);
        res.body.restaurants.should.have.deep.members(newTrip.restaurants);
        res.body.activities.should.have.deep.members(newTrip.activities);
      });
  });

  it('should update trips on PUT', function() {

    return chai.request(app)
      .get('/trips')
      .then(function (res) {
        updateTrip.id = res.body[0].id;
        return chai.request(app)
          .put(`/trips/${updateTrip.id}`)
          .send(updateTrip);
      })
      .then(function (res) {
        res.should.have.status(204);
      });
  });

  it('should delete trips on DELETE', function() {
    return chai.request(app)
      .get('/trips')
      .then(function (res) {
        return chai.request(app)
          .delete(`/trips/${res.body[0].id}`)
      })
      .then(function (res) {
        res.should.have.status(204);
      });
  });
});
