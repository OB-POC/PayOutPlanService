var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../data/config');
var fs = require("fs");
var path = require("path");
var bestMatchCalculation = require("../apps/bestCalc");

/* GET home page. */
router.get('/calculateBestMatch', function(req, res, next) {
  var token = req.headers['x-access-token'];
  // console.log(bestMatchData);
  jwt.verify(token, config.secret , function(err, decodedObj){
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var userName = decodedObj.username;
    bestMatchCalculation(userName).then(data => res.status(200).json(data)).catch(console.log);
  })
});

router.get('/makePayment', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, config.secret, function(err, decodedObj){
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var userName = decodedObj.username;
    // var userObj = bestMatchData.userData.filter((item)=>{
    //   return item.username == userName
    // })[0];
    //if(userObj){
      res.status(200).json({
        //totalAvailableBalance: userObj.totalAvailableBalance 
        "msg" : "deprecated"
      });
    //}
  })
})

module.exports = router;
