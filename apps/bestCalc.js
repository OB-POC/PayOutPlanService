var fs = require("fs");
var path = require("path");
const {
    readFileData,
    getTotalBalanceDebit,
    getTotalBalanceCredit,
    sortDebitAcc,
    sortCreditAcc,
    selectAllDebitCards,
    selectDebitCards,
    selectAllCreditCard,
    selectCreditCards,
    findBestMatch,
    calculateBestMatch,
    dataEnricher
} = require("../lib/bestPlanHelper");

function bestMatchCalculation(userName){
    let bestMatchCalculation = new Promise(function (resolve,reject){
        try{
            let jsCredit;
            let jsDebit;
            let creditFilePath = path.join(__dirname,`./../data/credit/${userName}.json`);
            let debitFilePath = path.join(__dirname,`./../data/debit/${userName}.json`);

            readFileData(creditFilePath).then(creditData =>{ 
                jsCredit = creditData;
                readFileData(debitFilePath).then(debitData => {
                    jsDebit = debitData;
                
                    let {totalAvailableBalance} = getTotalBalanceDebit(jsDebit);
                    let {totalCreditDue,totalMinDue} = getTotalBalanceCredit(jsCredit);
                    let sortedDebitAccs = sortDebitAcc(jsDebit);
                    let sortedCreditAccs = sortCreditAcc(jsCredit);

                    let debitAccs = sortedDebitAccs.banks;
                    let creditAccs = sortedCreditAccs.banks;

                    if(totalCreditDue <= totalAvailableBalance)
                    {
                        let debitAccounts = selectDebitCards(debitAccs, totalCreditDue);
                        let creditAccounts = selectAllCreditCard(creditAccs);
                        let {bestPlan} = calculateBestMatch(debitAccounts,creditAccounts);
                        let responseObj = dataEnricher(bestPlan,jsCredit,jsDebit);
                        resolve(responseObj);
                    }
                    else{
                        let creditAccounts = selectCreditCards(creditAccs, totalAvailableBalance,totalMinDue);
                        let debitAccounts = selectAllDebitCards(debitAccs);
                        let {bestPlan} = calculateBestMatch(debitAccounts,creditAccounts);
                        let responseObj = dataEnricher(bestPlan,jsCredit,jsDebit);
                        resolve(responseObj);
                    }
                
                })
            })
        }
        catch(err)
        {
            reject(err);
        }
        
    })
    return bestMatchCalculation;
}

module.exports = bestMatchCalculation;


