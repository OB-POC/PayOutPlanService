module.exports = {
    userData: [
        {
            username: 'alice',
            password: 'wonderland',
            UIN: 'UIN-xxxx',
            totalAvailableBalance: '4,600',
            creditDebitMatch: [
                {
                    bankName: 'Barclays',
                    accountType: 'M',
                    accountTitle: '2 Years Fixed Reward',
                    totalBalanceDue: '2,000',
                    clearedTotalDue: true,
                    interestRate: 3.3,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": '2,000',
                            "totalAvailableBalance": '2,600',
                            "beforeContributingBalance": '2,600',
                            "afterContributingBalance": '600',
                            "interestRate": 0.1
                        }
                    ]
                },
                {
                    bankName: 'JPMC',
                    accountType: 'CC',
                    accountTitle: 'Freedom Unlimited',
                    totalBalanceDue: '1,800',
                    clearedTotalDue: true,
                    apr: 25.49,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": 600,
                            "totalAvailableBalance": '2600',
                            "beforeContributingBalance": 600,
                            "afterContributingBalance": 0,
                            "interestRate": 0.1
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": '1,000',
                            "totalAvailableBalance": '1,000',
                            "beforeContributingBalance": '1,000',
                            "afterContributingBalance": 0,
                            "interestRate": 0.2
                        },
                        {
                            "bankName": "Barclays",
                            "accountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 200,
                            "totalAvailableBalance": '5,000',
                            "beforeContributingBalance": '5,000',
                            "afterContributingBalance": '4,800',
                            "interestRate": 0.25
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
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "Barclays",
                            "accountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 200,
                            "totalAvailableBalance": '5,000',
                            "beforeContributingBalance": '4,800',
                            "afterContributingBalance": '4,600',
                            "interestRate": 0.25
                        }
                    ] 
                }
            ] 
        },
        {
            username: 'john',
            password: 'doe',
            UIN: 'UIN-xxxxx',
            totalAvailableBalance: '-1,600',
            creditDebitMatch: [
                {
                    bankName: 'Barclays',
                    accountType: 'M',
                    accountTitle: '2 Years Fixed Reward',
                    totalBalanceDue: '2,000',
                    clearedTotalDue: true,
                    interestRate: 3.3,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": '2,000',
                            "totalAvailableBalance": '3,200',
                            "beforeContributingBalance": '3,200',
                            "afterContributingBalance": '1,200',
                            "interestRate": 0.1
                        }
                    ]
                },
                {
                    bankName: 'BOS',
                    accountType: 'CC',
                    accountTitle: 'Classic Credit Card',
                    totalBalanceDue: '2,000',
                    clearedTotalDue: true,
                    apr: 27.10,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "aaccountType": "PCA",
                            "accountTitle": "HSBC Advance Bank Account",
                            "contributingAmount": '1,200',
                            "totalAvailableBalance": '3,200',
                            "beforeContributingBalance": '1,200',
                            "afterContributingBalance": 0,
                            "interestRate": 0.1
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 800,
                            "totalAvailableBalance": '1,000',
                            "beforeContributingBalance": '1,000',
                            "afterContributingBalance": 200,
                            "interestRate": 0.2 
                        }
                    ]
                },
                {
                    bankName: 'JPMC',
                    accountType: 'CC',
                    accountTitle: 'Freedom Unlimited',
                    totalBalanceDue: '2,800',
                    clearedTotalDue: false,
                    apr: 25.49,
                    totalOutstandingBalance: '1,500',
                    senders: [
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 200,
                            "totalAvailableBalance": '1,000',
                            "beforeContributingBalance": 200,
                            "afterContributingBalance": 0,
                            "interestRate": 0.2 
                        },
                        {
                            "bankName": "Barclays",
                            "aaccountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": '1,100',
                            "totalAvailableBalance": '1,100',
                            "beforeContributingBalance": '1,100',
                            "afterContributingBalance": 0,
                            "interestRate": 0.25
                        }
                    ]
                }
            ]
        }
    ]
}