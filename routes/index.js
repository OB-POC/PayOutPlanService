var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../data/config');
var bestMatchData = require('../data/bestMatchData');
var fs = require("fs");
var path = require("path");

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
    var userObj = bestMatchData.userData.filter((item)=>{
      return item.username == userName
    })[0];
    if(userObj){
      res.status(200).json({
        totalAvailableBalance: userObj.totalAvailableBalance 
      });
    }
  })
})

function bestMatchCalculation(userName){

  var bestMatchCalc = new Promise(function (resolve,reject){
    let jsCredit;
    let jsDebit;
    let creditFilePath = path.join(__dirname,`./../data/credit/${userName}.json`);
    let debitFilePath = path.join(__dirname,`./../data/debit/${userName}.json`);
    readFileData(creditFilePath).then(creditData =>{ 
      jsCredit = creditData;
      readFileData(debitFilePath).then(debitData => {
        jsDebit = debitData;
        // let jsCredit = require(`./../data/credit/${userName}.js`);
        // let jsDebit = require(`./../data/debit/${userName}.js`);
        //console.log(jsCredit);
        let cloneCredit = JSON.parse(JSON.stringify(jsCredit));
        let cloneDebit = JSON.parse(JSON.stringify(jsDebit));

        
      
        jsCredit.banks.sort(function(a,b){
            let x = a.accounts[0].apr;
            let y = b.accounts[0].apr;
            let typeX = a.accounts[0].accountType;
            let typeY = b.accounts[0].accountType;
            if(typeX == typeY)
            { 
                //console.log(typeX+"  "+typeY)
                //console.log(x+"   "+y)
                if(x>y)
                    return -1;
                else if(x<y)
                    return 1;
                return 0;
            }
            else
            {
                // console.log(typeX+"  "+typeY)
                if(!typeX.localeCompare("M"))
                    return -1;
                else if(!typeX.localeCompare("CC"))
                    return 1;
                return 0
            }
            
        });
      
        //jsCredit.banks.forEach((a)=>console.log(a.accounts));
      
      
        jsDebit.banks.sort(function(a,b){
            console.log("sorts bank")
            let x = a.accounts[0].interestRate;
            let y = b.accounts[0].interestRate;
            if(x<y)
            {
                console.log("dont swamp",x,y);
                return -1;
            }
                
            if(x>y)
            {
                console.log("dont swamp",x,y);
                return 1;
            }
            return 0;
        });

      
        jsDebit.banks.forEach((a)=>console.log(a.accounts))
      
        var creditLength =  jsCredit.banks.length;
        var debitLength = jsDebit.banks.length;
        var creditIterateCount = 0;
        var debitIterateCount = 0;
        var bestPlan = new Object();
        while(true)
        {
            if(creditIterateCount == creditLength || debitIterateCount == debitLength)
            {
                break;
            }
      
            let debitAccount = jsDebit.banks[debitIterateCount].accounts[0];
            let creditAccount = jsCredit.banks[creditIterateCount].accounts[0];
            let debitBalance = debitAccount.availableBalance;
            let debitAccNo = debitAccount.accountNumber;
            let creditDue = creditAccount.totalBalanceDue;
            let creditAccNo = creditAccount.accountNumber;
      
            if(debitBalance > creditDue)
            {
                if(bestPlan.hasOwnProperty(creditAccNo))
                {
                    bestPlan[creditAccNo].push({accNO : debitAccNo, amt : creditDue});
                }
                else{
                    bestPlan[creditAccNo] = [];
                    bestPlan[creditAccNo].push({accNO : debitAccNo, amt : creditDue});
                }
                creditIterateCount++;
                debitAccount.availableBalance = debitAccount.availableBalance - creditDue;
                creditAccount.totalBalanceDue = 0;
            }
            else if(debitBalance == creditDue)
            {
                if(bestPlan.hasOwnProperty(creditAccNo))
                {
                    bestPlan[creditAccNo].push({accNO : debitAccNo, amt : debitBalance});
                }
                else{
                    bestPlan[creditAccNo] = [];
                    bestPlan[creditAccNo].push({accNO : debitAccNo, amt : debitBalance});
                }
                debitIterateCount++;
                creditIterateCount++;
                debitAccount.availableBalance = 0;
                creditAccount.totalBalanceDue = 0;
            }
            else if(debitBalance < creditDue)
            {
                if(bestPlan.hasOwnProperty(creditAccNo))
                {
                    bestPlan[creditAccNo].push({accNO : debitAccNo, amt : debitBalance});
                }
                else{
                    bestPlan[creditAccNo] = [];
                    bestPlan[creditAccNo].push({accNO : debitAccNo, amt : debitBalance});
                }
                debitIterateCount++;
                debitAccount.availableBalance = 0;
                creditAccount.totalBalanceDue = creditAccount.totalBalanceDue - debitBalance;
            }
        }
        // console.log(jsCredit);
        // console.log(jsDebit);
        // console.log(bestPlan);
        //res.status(200).json({});
      
        //data decorator
        var responseObj = {
            username: "alice",
            creditDebitMatch:[]
        };
      
        //console.log("bestPlan data");
        //console.log(bestPlan);
        //console.log("decorated data");
        for(let creditAccNo in bestPlan)
        {
            creditDebitMatchObj = {};
            //bestPlan[creditAccNo]
            let creditAcc = cloneCredit.banks.filter((item)=>{
                return item.accounts[0].accountNumber == creditAccNo;
            })[0];
      
            creditAccountDetail = creditAcc.accounts[0];
      
            //console.log("credit account info");
            //console.log(creditAcc);
            creditDebitMatchObj["bankName"] = creditAcc.bankName;
            creditDebitMatchObj["accountType"] = creditAccountDetail.accountType;
            creditDebitMatchObj["accountTitle"] = creditAccountDetail.accountTitle;
            creditDebitMatchObj["totalBalanceDue"] = creditAccountDetail.totalBalanceDue;
            let totalOutstandingBalance = creditAccountDetail.totalBalanceDue;
            
            //creditDebitMatchObj["clearedTotalDue"] = ;
            if(!creditAccountDetail.accountType.localeCompare("M"))
            {
                creditDebitMatchObj["interestRate"] = creditAccountDetail.interestRate;
            }
            else{
                creditDebitMatchObj["apr"] = creditAccountDetail.apr;
            }
            creditDebitMatchObj["senders"] = [];
      
            bestPlan[creditAccNo].forEach(element => {
                senderObj = {};
                let debitAcc = cloneDebit.banks.filter(item =>
                    {
                        return item.accounts[0].accountNumber == element.accNO;
                    })[0];
                debitAccountDetails = debitAcc.accounts[0];
                senderObj["bankName"] = debitAcc.bankName;
                senderObj["accountType"] = debitAccountDetails.accountType;
                senderObj["accountTitle"] = debitAccountDetails.accountTitle;
                senderObj["contributingAmount"] = element.amt;
                totalOutstandingBalance = totalOutstandingBalance - element.amt;
                senderObj["totalAvailableBalance"] = debitAccountDetails.availableBalance;
                senderObj["interestRate"] = debitAccountDetails.interestRate;
                //senderObj["beforeContributingBalance"] = element.
                //senderObj["afterContributingBalance"] = element.
                creditDebitMatchObj["senders"].push(senderObj);
            });
            creditDebitMatchObj["totalOutstandingBalance"] = totalOutstandingBalance;
            responseObj.creditDebitMatch.push(creditDebitMatchObj);
        }
        //console.dir(responseObj);
        // responseObj.creditDebitMatch.forEach((data)=>{
        //     console.log(data);
        // })
        resolve(responseObj);
        
      }).catch(console.log);
    }).catch(console.log);
    
    
  })

  return bestMatchCalc;

}

function readFileData(filePath){

  return new Promise(function(resolve,reject){
    fs.readFile(filePath,function(err,data){
      if(err)
      {
        console.log(err);
        reject(err);
      }
      let jsonData = JSON.parse(data);
      resolve(jsonData);
    })
  })
};



module.exports = router;
