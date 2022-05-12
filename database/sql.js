import { config } from './config.js'
import mysql from 'mysql'

const connection = mysql.createConnection(config.mysql)

function makeConnection() {
    connection.connect(err => {
        if (err) {
            console.log('fail to connect:', err)
            process.exit()
        }
    })
}



// newUser("d", "b", "c", "d")

// connection.query(`SELECT * FROM user_data`,function(err,rows){
//     console.log(rows);
// })

function newUser(username, fullname, password, email) {
    let command = `INSERT INTO user_data SET 
    email = "${email}", 
    username="${username}", 
    full_name="${fullname}", 
     password="${password}"`
    return runAdd(command)
}

function newNFT(username, nft_name, value) {
    value = parseFloat(value)
    let command = `INSERT INTO nft_storage SET
    holder_username = "${username}",
    nft_name = "${nft_name}",
    value = ${value}`
    return runAdd(command)
}

function newCryptoWallet(username, wallet_host, crypto_account_id, crypto_type, crypto_value) {
    crypto_value = parseFloat(crypto_value)
    crypto_account_id = parseInt(crypto_account_id)
    let command = `INSERT INTO crypto_wallet SET
    username = "${username}",
    crypto_wallet_host = "${wallet_host}",
    crypto_account_id = ${crypto_account_id},
    crypto_type = "${crypto_type}",
    crypto_value = ${crypto_value}`
    return runAdd(command)
}

function newBankAccount(username, bank_name, bank_account_id, deposit_currency, deposit_amount) {
    bank_account_id = parseInt(bank_account_id)
    deposit_amount = parseFloat(deposit_amount)
    let command = `INSERT INTO bank_account SET
    username = "${username}",
    bank_name = "${bank_name}",
    bank_account_id = ${bank_account_id},
    deposit_currency = "${deposit_currency}",
    deposit = ${deposit_amount}`
    return runAdd(command)
}

function verifyUser(input_username, input_password) {
    let command = `SELECT * FROM user_data where username = "${input_username}"`

    // console.log(runView(command))
    return new Promise(function (resolve, reject) {
        runView(command).then(function (data) {
            if (dealRowData(data)["password"] == input_password) {
                resolve(true);
                console.log("A")
            } else {
                resolve(false);
                console.log("b")
            }
        }
        )
    })
}

function getBankDeposit(username){
    let command = `SELECT * FROM bank_account where username = "${username}"`
    return runView(command);
}

function getCryptoDeposit(username){
    let command = `SELECT * FROM crypto_wallet where username = "${username}"`
    return runView(command);
}

function getNFTs(username){
    let command = `SELECT * FROM nft_storage where holder_username = "${username}"`
    return runView(command);
}


function readUserData(username) {
    let command = `SELECT * FROM user_data where username = "${username}"`
    return runView(command)
}

function runView(command) {
    return new Promise(function (resolve, reject) {
        makeConnection()
        connection.query(command, function (err, result) {
            if (err) {
                if (err.errno == 1452) {    //Error Code: er_no_referenced_row_2
                    resolve("no_such_user")
                    connection.end()
                } else if (err.errno == 1062) {  //Error Code: er_dup_entry
                    resolve("user_exists")
                    connection.end()
                } else {
                    console.log(err)

                    resolve("err code:" + err.code + "/err no:" + err.errno)
                    connection.end()
                }
            }
            else {
                connection.end()
                resolve(result)
            }
        })

    })
}

function runAdd(command) {
    return new Promise(function (resolve, reject) {
        makeConnection()
        connection.query(command, function (err) {
            if (err) {
                if (err.errno == 1452) {    //Error Code: er_no_referenced_row_2
                    resolve("no_such_user")
                    connection.end()
                } else if (err.errno == 1062) {  //Error Code: er_dup_entry
                    resolve("user_exists")
                    connection.end()
                } else {
                    console.log(err)

                    resolve("err code:" + err.code + "/err no:" + err.errno)
                    connection.end()
                }
            }
            else {
                connection.end()
                resolve("success")
            }
        })

    })

}

function dealRowData(data) {
    data = JSON.stringify(data);
    return JSON.parse(data)[0];
}

// connection.end()
export { newUser, newNFT, newCryptoWallet, newBankAccount, readUserData, verifyUser, getBankDeposit }