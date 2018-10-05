module.exports = {
    userData: [
        {
            username: 'alice',
            password: 'wonderland',
            UIN: 'UIN-xxxx',
            totalAvailableDebitBalance: 1200,
            totalAvailableCreditBalance: 0,
            creditDebitMatch: [
                {
                    accountType: 'CC',
                    accountNumber: '456789 0123456789',
                    accountTitle: 'Low Rate',
                    totalBalanceDue: 2000,
                    clearedTotalDue: true,
                    apr: 35,
                    dueDate: new Date().setDate(new Date().getDate()+5),
                    senders: [
                        {
                            "accountType": "PCA",
                            "accountNumber": "123456 78901234",
                            "accountTitle": "Classic Account",
                            "contributingAmount": 1900,
                            "totalAvailableBalance": 1900,
                            "beforeContributingBalance": 1900,
                            "afterContributingBalance": 0
                        },
                        {
                            "accountType": "PCA",
                            "accountNumber": "234567 89012345",
                            "accountTitle": "Platinum Account",
                            "contributingAmount": 100,
                            "totalAvailableBalance": 1400,
                            "beforeContributingBalance": 1400,
                            "afterContributingBalance": 1300
                        }
                    ]
                },
                {
                    accountType: 'M',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'Home Loan',
                    totalBalanceDue: 2000,
                    clearedTotalDue: true,
                    apr: 30,
                    dueDate: new Date().setDate(new Date().getDate()+20) , 
                    senders: [
                        {
                            "accountType": "PCA",
                            "accountNumber": "234567 89012345",
                            "accountTitle": "Platinum Account",
                            "contributingAmount": 1300,
                            "totalAvailableBalance": 1400,
                            "beforeContributingBalance": 1300,
                            "afterContributingBalance": 0
                        },
                        {
                            "accountType": "Savings",
                            "accountNumber": "345678 90123456",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 700,
                            "totalAvailableBalance": 4400,
                            "beforeContributingBalance": 4400,
                            "afterContributingBalance": 3700
                        }
                    ]
                },
                {
                    accountType: 'CC',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'No Fee 0% Balance Transfer',
                    totalBalanceDue: 2500,
                    clearedTotalDue: true,
                    apr: 25,
                    dueDate: new Date().setDate(new Date().getDate()+12),
                    senders: [
                        {
                            "accountType": "Savings",
                            "accountNumber": "345678 90123456",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 2500,
                            "totalAvailableBalance": 4400,
                            "beforeContributingBalance": 3700,
                            "afterContributingBalance": 1200   
                        }
                    ] 
                }
            ] 
        },
        {
            username: 'john',
            password: 'doe',
            UIN: 'UIN-xxxxx',
            totalAvailableCreditBalance: 200,
            totalAvailableDebitBalance: 0,
            creditDebitMatch: [
                {
                    accountType: 'CC',
                    accountNumber: '456789 0123456789',
                    accountTitle: 'Low Rate',
                    totalBalanceDue: 2000,
                    clearedTotalDue: true,
                    apr: 35,
                    dueDate: new Date().setDate(new Date().getDate()+12),
                    senders: [
                        {
                            "accountType": "PCA",
                            "accountNumber": "678901 23456789",
                            "accountTitle": "Classic Account",
                            "contributingAmount": 1900,
                            "totalAvailableBalance": 1900,
                            "beforeContributingBalance": 1900,
                            "afterContributingBalance": 0 
                        },
                        {
                            "aaccountType": "PCA",
                            "accountNumber": "234567 89012345",
                            "accountTitle": "Platinum Account",
                            "contributingAmount": 100,
                            "totalAvailableBalance": 1400,
                            "beforeContributingBalance": 1400,
                            "afterContributingBalance": 1300
                        }
                    ] 
                },
                {
                    accountType: 'CC',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'No Fee 0% Balance Transfer',
                    totalBalanceDue: 2500,
                    clearedTotalDue: true,
                    apr: 30,
                    dueDate: new Date().setDate(new Date().getDate()+5),
                    senders: [
                        {
                            "aaccountType": "PCA",
                            "accountNumber": "234567 89012345",
                            "accountTitle": "Platinum Account",
                            "contributingAmount": 1300,
                            "totalAvailableBalance": 1400,
                            "beforeContributingBalance": 1300,
                            "afterContributingBalance": 0
                        },
                        {
                            "accountType": "Savings",
                            "accountNumber": "345678 90123456",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 1200,
                            "totalAvailableBalance": 3000,
                            "beforeContributingBalance": 3000,
                            "afterContributingBalance": 1800 
                        }
                    ]
                },
                {
                    accountType: 'M',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'Home Loan',
                    totalBalanceDue: 2000,
                    clearedTotalDue: false,
                    apr: 25,
                    dueDate: new Date().setDate(new Date().getDate()+20),
                    senders: [
                        {
                            "accountType": "Savings",
                            "accountNumber": "345678 90123456",
                            "accountTitle": "Easy Saver",
                            "contributingAmount": 1800,
                            "totalAvailableBalance": 3000,
                            "beforeContributingBalance": 1800,
                            "afterContributingBalance": 0    
                        }
                    ]
                }
            ]
        }
    ]
}