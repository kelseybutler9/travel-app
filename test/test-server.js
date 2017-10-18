const chai = require('chai');
const chaiHttp = require('chai-http');
const {app,runServer,closeServer} = require('../server.js');

const should = chai.should();


chai.use(chaiHttp);

describe('Users', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should exist on GET', function() {
    return chai.request(app).get('/')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.html;
      });
  });
});
