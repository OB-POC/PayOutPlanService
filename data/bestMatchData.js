module.exports = {
    userData: [
        {
            username: 'alice',
            password: 'wonderland',
            UIN: 'UIN-xxxx',
            bankleftOut: 'Barclays',
            typeLeftOut: 'debit',
            totalAvailableBalance: '4,800',
            aerLeftOut: '0.25',
            creditDebitMatch: [
                {
                    bankName: 'Barclays',
                    accountType: 'M',
                    accountTitle: '2 Years Fixed Reward',
                    totalBalanceDue: '800',
                    clearedTotalDue: true,
                    interestRate: 3.3,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": '800',
                            "totalAvailableBalance": '2,600',
                            "beforeContributingBalance": '2,600',
                            "afterContributingBalance": '1,800',
                            "interestRate": 0.1
                        }
                    ]
                },
                {
                    bankName: 'NatWest',
                    accountType: 'CC',
                    accountTitle: 'Reward Black Credit Card',
                    totalBalanceDue: '1,800',
                    clearedTotalDue: true,
                    apr: 37.10,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": '1,800',
                            "totalAvailableBalance": '2,600',
                            "beforeContributingBalance": '1,800',
                            "afterContributingBalance": 0,
                            "interestRate": 0.1
                        }
                    ]
                },
                {
                    bankName: 'RBS',
                    accountType: 'CC',
                    accountTitle: 'Unlimited Credit Card',
                    totalBalanceDue: 1200,
                    clearedTotalDue: true,
                    apr: 19.94,
                    totalOutstandingBalance: 0,
                    senders: [
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
                }
            ] 
        },
        {
            username: 'john',
            password: 'doe',
            UIN: 'UIN-xxxxx',
            typeLeftOut: 'credit',
            bankLeftOut: 'NatWest',
            totalAvailableBalance: '-900',
            aprLeftOut: '23.70',
            creditDebitMatch: [
                {
                    bankName: 'Barclays',
                    accountType: 'M',
                    accountTitle: '2 Years Fixed Reward',
                    totalBalanceDue: '800',
                    clearedTotalDue: true,
                    interestRate: 3.3,
                    totalOutstandingBalance: 0,
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": '800',
                            "totalAvailableBalance": '2,700',
                            "beforeContributingBalance": '2,700',
                            "afterContributingBalance": '1,900',
                            "interestRate": 0.1
                        }
                    ]
                },
                {
                    bankName: 'RBS',
                    accountType: 'CC',
                    accountTitle: 'Reward Black Credit Card',
                    totalBalanceDue: '2,000',
                    clearedTotalDue: true,
                    apr: 27.10,
                    totalOutstandingBalance: '0',
                    senders: [
                        {
                            "bankName": "HSBC",
                            "accountType": "PCA",
                            "accountTitle": "HSBC Advance bank Account",
                            "contributingAmount": '1,900',
                            "totalAvailableBalance": '2,700',
                            "beforeContributingBalance": '1,900',
                            "afterContributingBalance": '0',
                            "interestRate": 0.1
                        },
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": 100,
                            "totalAvailableBalance": '1,900',
                            "beforeContributingBalance": '1,900',
                            "afterContributingBalance": '1,800',
                            "interestRate": 0.2 
                        }
                    ]
                },
                {
                    bankName: 'NatWest',
                    accountType: 'CC',
                    accountTitle: 'Reward Credit Card',
                    totalBalanceDue: '2,900',
                    clearedTotalDue: false,
                    apr: 23.7,
                    totalOutstandingBalance: 900,
                    senders: [
                        {
                            "bankName": "Halifax",
                            "accountType": "SB",
                            "accountTitle": "Every Day Saver",
                            "contributingAmount": '1,800',
                            "totalAvailableBalance": '1,900',
                            "beforeContributingBalance": '1,800',
                            "afterContributingBalance": '0',
                            "interestRate": 0.2 
                        },
                        {
                            "bankName": "Barclays",
                            "accountType": "SB",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 200,
                            "totalAvailableBalance": '200',
                            "beforeContributingBalance": '200',
                            "afterContributingBalance": 0,
                            "interestRate": 0.25 
                        }
                    ]
                }
            ]
        }
    ]
}