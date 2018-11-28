var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bestMatchCalculation = require("../apps/bestCalc");
var { secret, serviceUrls } = require('../config')
var request = require('request');

/* GET home page. */
router.get('/calculateBestMatch', function(req, res, next) {
  var token = req.headers['x-access-token'];
  // console.log(bestMatchData);
  jwt.verify(token, secret , function(err, decodedObj){
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var userName = decodedObj.username;
    bestMatchCalculation(userName).then(data => res.status(200).json(data)).catch(console.log);
  })
});

router.get('/makePayment', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, secret, function(err, decodedObj){
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var userName = decodedObj.username;
    request.get(`${serviceUrls.dbUrl}/best-match`, function(err, response, body){
      var userObj = JSON.parse(body).filter((item)=>{
        return item.username == userName
      })[0];
      if(userObj){
        res.status(200).json({
          totalAvailableBalance: userObj.totalAvailableBalance 
        });
      }
    })  
  })
})

module.exports = router;
