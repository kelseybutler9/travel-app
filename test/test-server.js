const chai = require('chai');
const chaiHttp = require('chai-http');
// var server = require('../server.js');
const {app,runServer,closeServer} = require('../server.js');

const should = chai.should();
// var app = server.app;
// var storage = server.storage;

chai.use(chaiHttp);

describe('Users', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closServer();
  });

  it('should exist on GET', function() {
    return chai.request(app).get('/')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.html;
      });
  });

// describe('initial page', function() {
//   it('exists', function(done) {
//     chai.request(app).get('/')
//       .end(function(err, res) {
//         console.log('Response:'+ res);
//         res.should.have.status(200);
//         res.should.be.html;
//         done();
//       });
// });
});
