//import { getETHtoUSD, getUSDtoNTD } from "../get_exchange_rate.js";
import { newUser, newNFT, newCryptoWallet, newBankAccount, readUserData, verifyUser, getBankDeposit } from "./sql.js";

// getETHtoUSD().then((function(data){
//     console.log(data);
// }))

// getUSDtoNTD().then((function(data){
//     console.log(data);
// }))

// newUser("a", "b", "c", "d").then(function (data) {
//     console.log(data)
// })

// readUserData("b").then(function(data){
//     console.log(dealRowData(data)["full_name"]);
// });

// verifyUser("b","c").then(function(data){
// console.log(data);
// })

// verifyUser("b","c").then(function(data){
//     console.log(data)
// })

// .then(function(data){
//     console.log(data)
// })

getBankDeposit("a").then(function(data){
    console.log(data)
})


function dealRowData(data){
    data = JSON.stringify(data);
    return JSON.parse(data)[0];
}
// newNFT("a","b",5)
// newCryptoWallet("a","binance",123,"bit",50)
// newBankAccount("a","SC",123,"NTD",123).then(function(data){
//     console.log(data)
// })
