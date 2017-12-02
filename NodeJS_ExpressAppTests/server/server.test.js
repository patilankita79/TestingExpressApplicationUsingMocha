const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// use of done because this is going to be asynchronous

//test case
it('should return hello world response', (done) => {
  //pass express application inside request
  request(app)
         .get('/')
         .expect(200)
         .expect('Hello World!')
         .end(done);
});


// Test case
// assert 200
// assert that you exist in users array

// use of done because this is going to be asynchronous
it('should written my user object', (done) => {
  request(app)
         .get('/users')
         .expect(200)
         .expect((res) => {
           expect(res.body).toInclude({
             name: 'Ankita',
             age: 23
           });
         })
         .end(done);
})
