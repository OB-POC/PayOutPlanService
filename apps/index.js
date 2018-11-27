var { getSimpleInterest, getCompundInterest } = require('../lib');

// Calculate SI for all debit accounts
let calcSIForDebit = (banks) => {
    let totalSI = banks.reduce((si, bank) => {
        let { accounts } = bank;
        return si + getSimpleInterest(accounts[0].balance, accounts[0].interestRate)
    }, 0)

    return totalSI;
}

// Calculate CI for all credit accounts
let calcCIForCredit = (banks) => {
    let totalCI = banks.reduce((ci, bank) => {
        let { accounts } = bank;
        let rate = accounts[0].accountType === 'M' ? accounts[0].interestRate : accounts[0].apr
        return ci + getCompundInterest(accounts[0].totalBalanceDue, rate)
    }, 0)
    
    return totalCI;
}

// Calculate difference between SI of debit accounts and CI of credit accounts monthly.
let calcDiff = (debitBanks, creditBanks) => {
    return Math.abs(calcSIForDebit(debitBanks) - calcCIForCredit(creditBanks));
}

module.exports = {
    calcDiff
}