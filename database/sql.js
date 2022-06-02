import {config} from './config.js'
import mysql from 'mysql'
import * as exchange from "./get_exchange_rate.js";

const connection = mysql.createConnection(config.mysql)

makeConnection()

export function makeConnection() {
    connection.connect(err => {
        if (err) {
            console.log('fail to connect:', err)
            process.exit()
        }
    })
}


//0homepage
export function newEmailSubscribe(email) {
    let command = `INSERT INTO email_subscription_list SET
    email = "${email}"`
    return runAddAccount(command)
}

//1sign-in
export function verifyUser(input_email, input_password) {
    let command = `SELECT * FROM user_data where email = "${input_email}"`
    // console.log(runView(command))
    //console.log(input_email)
    console.log(input_password)
    return new Promise(function (resolve, reject) {
        runView(command).then(function (data) {
            if (data == "") {
                console.log("input_email: "+input_email)
                resolve("no_such_email_debug");
            }
            else if (dealRowData(data)[0]["password"] == input_password) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }
        )
    })
}


//2sign-up
export function newUser(username, password, email) {
    let command = `INSERT INTO user_data SET 
    email = "${email}", 
    username="${username}",  
    password="${password}"`
    return new Promise(function (resolve, reject) {
        connection.query(command, function (err) {
            if (err) {
                if (err.errno == 1452) {    //Error Code: er_no_referenced_row_2
                    resolve("no_such_user")
                } else if (err.errno == 1062) {
                    console.log(err)  //Error Code: er_dup_entry
                    if (err.sqlMessage.includes('PRIMARY')) {
                        resolve("user_exists")
                    }
                    else {
                        resolve("email_duplicate")
                    }
                } else {
                    console.log(err)

                    resolve("err code:" + err.code + "/err no:" + err.errno)
                }
            }
            else {
                resolve("success")
            }
        })

    })
}

// export function emailVerification


//3overview 4overview 5overview 6overview

export function getAllDepositDefault(username) {
    let command = `SELECT * FROM bank_account where username = "${username}"`
    return new Promise(function (resolve, reject) {
        runView(command).then(function (data) {
            resolve(getAllDepositParse(data, "ntd"));
        })
    })
}

export function getAllDepositExchangeAll(username, target_currency) {
    let command = `SELECT * FROM bank_account where username = "${username}"`
    return new Promise(function (resolve, reject) {
        runView(command).then(function (data) {
            resolve(getAllDepositParse(data, target_currency));
        })
    })
}

export function getExchangedAmount(amount, original_currency, target_currency) {
    return exchange.get_rate(amount, original_currency, target_currency);
}

//12
//Multi-currency canceled

//13overview 14overview 15overview 18Account 24Account 25Account
export function getAllDepositByCategory(username, target_currency) {
    let command = `SELECT * FROM bank_account where username = "${username}"`
    return new Promise(function (resolve, reject) {
        runView(command).then(function (data) {
            resolve(getAllDepositByCategoryParse(data));
        })
    })
}

//16category 17category
export function getAllDepositInOneCategory(username, category) {
    let command = `SELECT * FROM bank_account where 
    username = "${username}" AND 
    account_type = "${category}"`
    return new Promise(function (resolve, reject) {
        runView(command).then(function (data) {
            resolve(getAllDepositInOneCategoryParse(data, "ntd"));
        })
    })
}


//18Account 24Account 25Account
export function newBankAccount(username, host_name, bank_account_id, deposit_currency, deposit_amount, account_type) {
    bank_account_id = parseInt(bank_account_id)
    deposit_amount = parseFloat(deposit_amount)
    let command = `INSERT INTO bank_account SET
    username = "${username}",
    host_name = "${host_name}",
    bank_account_id = ${bank_account_id},
    deposit_currency = "${deposit_currency}",
    deposit = ${deposit_amount},
    account_type = "${account_type}"`   // nft/stock/crypto/cdFor/cdNtd
    return runAddAccount(command)
}


export function newNFT(username, nft_name, value) {
    value = parseFloat(value)
    let command = `INSERT INTO nft_storage SET
    holder_username = "${username}",
    nft_name = "${nft_name}",
    value = ${value}`
    return runAddAccount(command)
}





export function getBankDeposit(username) {
    let command = `SELECT * FROM bank_account where username = "${username}"`
    return runView(command);
}

export function getCryptoDeposit(username) {
    let command = `SELECT * FROM crypto_wallet where username = "${username}"`
    return runView(command);
}

export function getNFTs(username) {
    let command = `SELECT * FROM nft_storage where holder_username = "${username}"`
    return runView(command);
}


export function readUserData(username) {
    let command = `SELECT * FROM user_data where username = "${username}"`
    return runView(command)
}

export function runView(command) {
    return new Promise(function (resolve, reject) {
        connection.query(command, function (err, result) {
            if (err) {
                if (err.errno == 1452) {    //Error Code: er_no_referenced_row_2
                    resolve("no_such_user")

                } else if (err.errno == 1062) {  //Error Code: er_dup_entry
                    resolve("user_exists")
                } else {
                    console.log("***********" + err + "*************")

                    resolve("***********err code:" + err.code + "/err no:" + err.errno + "*************")
                }
            }
            else {
                resolve(result)
            }
        })

    })
}

export function runAddUser(command) {
    return new Promise(function (resolve, reject) {
        connection.query(command, function (err) {
            if (err) {
                if (err.errno == 1452) {    //Error Code: er_no_referenced_row_2
                    resolve("no_such_user")
                } else if (err.errno == 1062) {
                    console.log(err)  //Error Code: er_dup_entry
                    resolve("user_exists")
                } else {
                    console.log(err)

                    resolve("err code:" + err.code + "/err no:" + err.errno)
                }
            }
            else {
                resolve("success")
            }
        })

    })

}

export function runAddAccount(command) {
    return new Promise(function (resolve, reject) {
        connection.query(command, function (err) {
            if (err) {
                if (err.errno == 1062) {
                    // console.log(err)  //Error Code: er_dup_entry
                    resolve("account_exists")
                } else {
                    // console.log(err)

                    resolve("err code:" + err.code + "/err no:" + err.errno + "\n" + err)
                }
            }
            else {
                resolve("success")
                // connection.end()
            }
        })

    })

}


export function dealRowData(data) {
    data = JSON.stringify(data);
    return JSON.parse(data);
}



//supply functions
//S3 !!!exchange function might already broke
function getAllDepositParse(rowData, target_currency) {
    var newData = dealRowData(rowData);
    var toReturn = []
    newData = makeAllAmountExchanged1(newData, "ntd");
    toReturn[0] = newData;
    toReturn[1] = dealRowData(rowData)
    return toReturn;
}


//S14
function getAllDepositByCategoryParse(rowData, target_currency) {
    var newData = dealRowData(rowData);
    var originalData = dealRowData(rowData);
    var toReturn = [];
    toReturn.push(getAllDepositByCategoryParse2(originalData))
    toReturn.push(makeAllAmountExchanged1(getAllDepositByCategoryParse2(newData), target_currency));
    // console.log(toReturn)
    return toReturn;
    // , makeAllAmountExchanged(getAllDepositByCategoryParse2(newData), "ntd")
}

function getAllDepositByCategoryParse2(Data) {
    var nft = [];
    var stock = [];
    var crypto = [];
    var cdFor = [];
    var cdNtd = [];
    for (var eachAccount in Data) {
        switch (Data[eachAccount]["account_type"]) {
            case ("nft"):
                nft.push(Data[eachAccount]);
                break;
            case ("stock"):
                stock.push(Data[eachAccount]);
                break;
            case ("crypto"):
                stock.push(Data[eachAccount]);
                break;
            case ("cdFor"):
                stock.push(Data[eachAccount]);
                break;
            case ("cdNtd"):
                stock.push(Data[eachAccount]);
                break;
        }
    }
    return [nft, stock, crypto, cdFor, cdNtd]
}

//S17
function getAllDepositInOneCategoryParse(rowData, target_currency) {
    var newData = dealRowData(rowData);
    var toReturn = []
    newData = makeAllAmountExchanged2(newData, target_currency);
    toReturn[0] = newData;
    toReturn[1] = dealRowData(rowData)
    return toReturn;
}

function makeAllAmountExchanged1(data, target_currency) {
    for (var eachAccount in data) {
        // console.log(data[eachAccount])
        for (var index in data[eachAccount]) {
            data[eachAccount][index]["deposit"] = exchange.get_rate(data[eachAccount][index]["deposit"], data[eachAccount][index]["deposit_currency"], target_currency)
        }
    }
    return data;
}


function makeAllAmountExchanged2(data, target_currency) {
    for (var eachAccount in data) {
        data[eachAccount]["deposit"] = exchange.get_rate(data[eachAccount]["deposit"], data[eachAccount]["deposit_currency"], target_currency)
        console.log(data[eachAccount]["deposit"])
    }
    return data;
}