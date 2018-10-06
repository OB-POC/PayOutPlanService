module.exports = {
    userData: [
        {
            username: 'alice',
            password: 'wonderland',
            UIN: 'UIN-xxxx',
            totalAvailableBalance: 600,
            creditDebitMatch: [
                {
                    bankName: 'Monzo',
                    accountType: 'M',
                    accountTitle: 'Home Loan',
                    totalBalanceDue: 6000,
                    clearedTotalDue: true,
                    interestRate: 2.9,
                    senders: [
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 1000,
                            "totalAvailableBalance": 1000,
                            "beforeContributingBalance": 1000,
                            "afterContributingBalance": 0
                        },
                        {
                            "bankName": "Barclays",
                            "accountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 5000,
                            "totalAvailableBalance": 5000,
                            "beforeContributingBalance": 5000,
                            "afterContributingBalance": 0
                        },
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 2600,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 2600
                        }
                    ]
                },
                {
                    bankName: 'JPMC',
                    accountType: 'CC',
                    accountTitle: 'Freedom Unlimited',
                    totalBalanceDue: 1800,
                    clearedTotalDue: true,
                    apr: 25.49,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": 1800,
                            "totalAvailableBalance": 2600,
                            "beforeContributingBalance": 2600,
                            "afterContributingBalance": 800
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 1000,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 1000
                        },
                        {
                            "bankName": "Barclays",
                            "accountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 5000,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 5000
                        }
                    ]
                },
                {
                    bankName: 'RBS',
                    accountType: 'CC',
                    accountTitle: 'Unlimited Credit Card',
                    totalBalanceDue: 200,
                    clearedTotalDue: true,
                    apr: 19.94,
                    senders: [
                        {   
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": 200,
                            "totalAvailableBalance": 2600,
                            "beforeContributingBalance": 800,
                            "afterContributingBalance": 600  
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 1000,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 1000
                        },
                        {
                            "bankName": "Barclays",
                            "accountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 5000,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 5000
                        }
                    ] 
                }
            ] 
        },
        {
            username: 'john',
            password: 'doe',
            UIN: 'UIN-xxxxx',
            totalAvailableBalance: -1100,
            creditDebitMatch: [
                {
                    bankName: 'Monzo',
                    accountType: 'M',
                    accountTitle: 'Home Loan',
                    totalBalanceDue: 6000,
                    clearedTotalDue: true,
                    interestRate: 2.9,
                    senders: [
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 2500,
                            "totalAvailableBalance": 2500,
                            "beforeContributingBalance": 2500,
                            "afterContributingBalance": 0 
                        },
                        {
                            "bankName": "Barclays",
                            "aaccountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 3500,
                            "totalAvailableBalance": 3500,
                            "beforeContributingBalance": 3500,
                            "afterContributingBalance": 0
                        },
                        {
                            "bankName": "HSBC",
                            "aaccountType": "PCA",
                            "accountTitle": "HSBC Advance Bank Account",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 2100,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 2100
                        }
                    ] 
                },
                {
                    bankName: 'BOS',
                    accountType: 'CC',
                    accountTitle: 'Classic Credit Card',
                    totalBalanceDue: 400,
                    clearedTotalDue: true,
                    apr: 27.90,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "aaccountType": "PCA",
                            "accountTitle": "HSBC Advance Bank Account",
                            "contributingAmount": 400,
                            "totalAvailableBalance": 2100,
                            "beforeContributingBalance": 2100,
                            "afterContributingBalance": 1700
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 2500,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 2500 
                        },
                        {
                            "bankName": "Barclays",
                            "aaccountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 3500,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 2500
                        }
                    ]
                },
                {
                    bankName: 'JPMC',
                    accountType: 'CC',
                    accountTitle: 'Freedom Unlimited',
                    totalBalanceDue: 2800,
                    clearedTotalDue: false,
                    apr: 25.49,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "aaccountType": "PCA",
                            "accountTitle": "HSBC Advance Bank Account",
                            "contributingAmount": 1700,
                            "totalAvailableBalance": 2100,
                            "beforeContributingBalance": 1700,
                            "afterContributingBalance": 0   
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 2500,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 2500 
                        },
                        {
                            "bankName": "Barclays",
                            "aaccountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 0,
                            "totalAvailableBalance": 3500,
                            "beforeContributingBalance": 0,
                            "afterContributingBalance": 3500
                        }
                    ]
                }
            ]
        }
    ]
}