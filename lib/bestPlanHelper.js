var fs = require("fs");
var path = require("path");
//file reading
let readFileData = (filePath) => {
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,function(err,data){
        if(err)
        {
            reject(err);
        }
        let jsonData = JSON.parse(data);
        resolve(jsonData);
        })
    })
};

//sort the crdit card
let sortCreditAcc = (jsCredit) => {
    jsCredit.banks.sort(function(a,b){
        let x = a.accounts[0].apr;
        let y = b.accounts[0].apr;
        let typeX = a.accounts[0].accountType;
        let typeY = b.accounts[0].accountType;
        if(typeX == typeY)
        { 
            if(x>y)
                return -1;
            else if(x<y)
                return 1;
            return 0;
        }
        else
        {
            if(!typeX.localeCompare("M"))
                return -1;
            else if(!typeX.localeCompare("CC"))
                return 1;
            return 0
        }
        
        return jsCredit;
    });
    return jsCredit;
}

//sort debit card
let sortDebitAcc = (jsDebit) => {
    jsDebit.banks.sort(function(a,b){
        let x = a.accounts[0].interestRate;
        let y = b.accounts[0].interestRate;
        if(x<y)
        {
            return -1;
        }
            
        if(x>y)
        {
            return 1;
        }
        return 0;
    });

    return jsDebit;
}
//select amount pay to credit card
let selectDebitCards = (debitAccs, totalCreditDue) => {
    return debitAccs.filter((bankAccount) => {
        const {accounts} = bankAccount;
        if(accounts[0].availableBalance <= totalCreditDue)
        {
            accounts[0]["usableAmount"] = accounts[0].availableBalance;
            totalCreditDue -= accounts[0].availableBalance;
            return true;
        }
        else{
            accounts[0]["usableAmount"] = totalCreditDue;
            totalCreditDue = 0;
            return true;
        }
    })
}

let selectAllDebitCards = (debitAccs) => {
    return debitAccs.map((bankAccount) =>{
        const {accounts} = bankAccount;
        accounts[0]["usableAmount"] = accounts[0].availableBalance;
        return bankAccount;
    })
}
//select amount to clear the credit card
let selectCreditCards = (creditAccs, totalAvailableBalance,totalMinDue) => {

    if(totalAvailableBalance >= totalMinDue)
    {
        return creditAccs.map((bankAccount) => {
            
            const {accounts} = bankAccount;
            let balanceDue = accounts[0].totalBalanceDue;
            let minDue = 0;
            if(accounts[0].accountType === "CC")
            {
                minDue = accounts[0].minBalanceDue;
            }
            else if(accounts[0].accountType === "M"){
                minDue = accounts[0].minMonthlyPayment;
            }
            
            let afterClearedAvlBal;
            if(totalAvailableBalance >= balanceDue)
            {
                afterClearedAvlBal = totalAvailableBalance - balanceDue;
            }else{
                afterClearedAvlBal = 0;
            }
            let afterClearedMinBal = totalMinDue - minDue;
            //console.log(balanceDue,minDue,totalAvailableBalance,totalMinDue,afterClearedAvlBal,afterClearedMinBal);
            if(totalAvailableBalance == totalMinDue)
            {
                accounts[0]["clearableAmount"] = minDue;
                totalAvailableBalance = afterClearedMinBal;
                totalMinDue = afterClearedMinBal;
                return bankAccount;
            }
            if(afterClearedAvlBal > afterClearedMinBal){
                accounts[0]["clearableAmount"] = balanceDue;
                totalAvailableBalance = totalAvailableBalance - balanceDue;
                totalMinDue = afterClearedMinBal;
                return bankAccount;
            }
            else{
                accounts[0]["clearableAmount"] = totalAvailableBalance - afterClearedMinBal;
                totalAvailableBalance = afterClearedMinBal;
                totalMinDue = afterClearedMinBal;
                return bankAccount;
            }
        })
    }
    else
    {
        //code for the balance is less then the totalmindue balance
    }
}

let selectAllCreditCard = (creditAccs) =>{
    return creditAccs.map((bankAccount) =>{
        const {accounts} = bankAccount;
        accounts[0]["clearableAmount"] = accounts[0].totalBalanceDue;
        return bankAccount;
    })
}

let calculateBestMatch = (debitAccounts,creditAccounts) => {
        var creditLength =  creditAccounts.length;
        var debitLength = debitAccounts.length;
        var creditIterateCount = 0;
        var debitIterateCount = 0;
        var bestPlan = new Object();
        while(true)
        {
            if(creditIterateCount == creditLength || debitIterateCount == debitLength)
            {
                break;
            }
      
            let debitAccount = debitAccounts[debitIterateCount].accounts[0];
            let creditAccount = creditAccounts[creditIterateCount].accounts[0];
            let debitBalance = debitAccount.usableAmount;
            let debitAccNo = debitAccount.accountNumber;
            let creditDue = creditAccount.clearableAmount;
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
                debitAccount.usableAmount = debitAccount.usableAmount - creditDue;
                creditAccount.clearableAmount = 0;
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
                debitAccount.usableAmount = 0;
                creditAccount.clearableAmount = 0;
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
                debitAccount.usableAmount = 0;
                creditAccount.clearableAmount = creditAccount.clearableAmount - debitBalance;
            }
        }

        return {bestPlan};
}

let findBestMatch = (debitAccounts,creditAccounts) => {

}

let dataEnricher = (bestPlan,cloneCredit,cloneDebit) => {
    //data decorator
    var responseObj = {
        username: cloneCredit.username,
        creditDebitMatch:[]
    };
  
    for(let creditAccNo in bestPlan)
    {
        creditDebitMatchObj = {};
        let creditAcc = cloneCredit.banks.filter((item)=>{
            return item.accounts[0].accountNumber == creditAccNo;
        })[0];
  
        creditAccountDetail = creditAcc.accounts[0];
  
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
    return responseObj;
}

//madhankumar
let getTotalBalanceDebit = (jsDebit) => {
    try {
        let totalAvailableBalance = jsDebit.banks.reduce((acc, val) => {
            return acc + val.accounts[0].availableBalance
        }, 0)
        let BalanceDebit = {
            totalAvailableBalance
        }
        return BalanceDebit;
    }
    catch (err) {
        return err;
    }
}


let getTotalBalanceCredit = (jsCredit) => {
    try {
        let totalCreditDue = jsCredit.banks.reduce((acc, val) => {
            return acc + val.accounts[0].totalBalanceDue
        }, 0)
        let totalMinDue = jsCredit.banks.reduce((acc, val) => {
            if (val.accounts[0].accountType === "CC") {
                acc += val.accounts[0].minBalanceDue
            }
            else if (val.accounts[0].accountType === "M") {
                acc += val.accounts[0].minMonthlyPayment
            }
            return acc;
        }, 0)
        let BalanceCredit = {
            totalCreditDue,
            totalMinDue
        }
        return BalanceCredit;
    }
    catch (err) {
        return err;
    }
}

module.exports = {
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
}