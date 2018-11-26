const expect = require('chai').expect;
const request = require('supertest');


const alice_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNTM4OTk2MjQ4LCJleHAiOjE1MzkwODI2NDh9._eaVntxHE99wVQIDYMQ0ICUDrJusetscYoKGU0tZPfk";
const john_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNTM4OTk2MjQ4LCJleHAiOjE1MzkwODI2NDh9._eaVntxHE99wVQIDYMQ0ICUDrJusetscYoKGU0tZPfk";

var container = request(require('../app'));

const bestMatchCalculation = require('../apps/bestCalc');

describe('Payout Plan', function () {

  describe('Alice calculateBestMatch', function () {
    xit('Calling the alice calculateBestMatch - positive', function (done) {
      container
        .get('/payOutPlanService/calculateBestMatch')
        .set("x-access-token", alice_token)
        .expect(200, done)
    });
    it('Calling the alice calculateBestMatch with wrong token- negative', function (done) {
      container
        .get('/payOutPlanService/calculateBestMatch')
        .set("x-access-token", "wrong token")
        .expect(500, done)
    });
  })

  describe('john calculateBestMatch', function () {
    xit('Calling the john calculateBestMatch - positive', function (done) {
      container
        .get('/payOutPlanService/calculateBestMatch')
        .set("x-access-token", john_token)
        .expect(200, done)
    });
    it('Calling the alice calculateBestMatch with wrong token- negative', function (done) {
      container
        .get('/payOutPlanService/calculateBestMatch')
        .set("x-access-token", "wrong token")
        .expect(500, done)
    });
  })

  describe('Analysis of Savings', () => {
    it('Calculate the savings for Alice', (done) => {
      bestMatchCalculation('alice')
        .then(data => {
          expect(data.optimizeSaving).not.to.be.undefined;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        })
    })

    it('Calculate the savings for John', (done) => {
      bestMatchCalculation('john')
        .then(data => {
          expect(data.optimizeSaving).not.to.be.undefined;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        })
    })
  });
});