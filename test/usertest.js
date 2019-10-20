let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../src/routes/api/user');
console.log("server : ",server);

//Our parent block
describe('Contacts', () => {
 describe('/GET contacts', () => {
     it('it should GET all the contacts', (done) => {
     chai.request(server)
       .get('/api/v1/user/contacts')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             (res.body.users.length).should.be.eql(1);
             done();
          });
       });
  });
});
