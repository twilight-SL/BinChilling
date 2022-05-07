import { getETHtoUSD, getUSDtoNTD } from "./get_exchange_rate.js";

getETHtoUSD().then((function(data){
    console.log(data);
}))

getUSDtoNTD().then((function(data){
    console.log(data);
}))