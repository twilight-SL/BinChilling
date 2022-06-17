import request from "request";
import cheerio from "cheerio"; "cheerio";
import "fs";
import "console";
import { resolve } from "path";


export function get_rate(amount, deposit_currency, target_currency) {
    return new Promise(function (resolve, reject) {
        var to_usd = 0;
        switch (deposit_currency) {
            case "ntd":
                to_usd = parseFloat(amount) * 0.034;
                break;
            case "usd":
                to_usd = parseFloat(amount);
                break;
            case "gbp":
                to_usd = parseFloat(amount) * 1.26;
                break;
            case "aud":
                to_usd = parseFloat(amount) * 0.71;
                break;
            case "eur":
                to_usd = parseFloat(amount) * 1.07;
                break;
            case "jpy":
                to_usd = parseFloat(amount) * 0.0078;
                break;
            case "cny":
                to_usd = parseFloat(amount) * 0.15;
                break;
            case "eth":
                resolve(get_rate_from_eth(amount, target_currency))
        }
        switch (target_currency) {
            case "ntd":
                var a = (to_usd / 0.034).toString()
                resolve(a);
            case "usd":
                resolve(to_usd.toString());
                break
            case "gbp":
                resolve((to_usd / 1.26).toString());
                break;
            case "aud":
                resolve(to_usd / 0.71);
                break;
            case "eur":
                resolve(to_usd / 1.07);
                break;
            case "jpy":
                resolve(to_usd / 0.0078);
                break;
            case "cny":
                resolve(to_usd / 0.15);
                break;
            case "eth":
                resolve(get_rate_to_eth(amount, deposit_currency))
                break;
        }
    })
}


export function get_rate_to_eth(amount, original_currency) {
    var to_usd = 0;
    switch (original_currency) {
        case "ntd":
            to_usd = parseFloat(amount) * 0.034;
            break;
        case "usd":
            to_usd = parseFloat(amount);
            break;
        case "gbp":
            to_usd = parseFloat(amount) * 1.26;
            break;
        case "aud":
            to_usd = parseFloat(amount) * 0.71;
            break;
        case "eur":
            to_usd = parseFloat(amount) * 1.07;
            break;
        case "jpy":
            to_usd = parseFloat(amount) * 0.0078;
            break;
        case "cny":
            to_usd = parseFloat(amount) * 0.15;
            break;
    }
    return get_rate_to_eth_craw(amount)
}

function get_rate_to_eth_craw(amount) {
    return new Promise(function (resolve, reject) {
        request({
            url: "https://bitflyer.com/en-us/ethereum-chart",
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const data = [];
            const $ = cheerio.load(body)
            const rate = $(".p-currencyInfo__head");
            var text = rate.text().replace(" ", "")
            var text = text.replace(/\s/g, '')
            var text = text.replace(",", '')
            var final = text.split("*")[0]
            resolve(1 / (parseFloat(final) * amount))
        })
    })
}

export function get_rate_from_eth(amount, target_currency) {
    var to_usd = 0
    switch (target_currency) {
        case "ntd":
            to_usd = parseFloat(amount) * 0.034;
            break;
        case "usd":
            to_usd = parseFloat(amount);
            break;
        case "gbp":
            to_usd = parseFloat(amount) * 1.26;
            break;
        case "aud":
            to_usd = parseFloat(amount) * 0.71;
            break;
        case "eur":
            to_usd = parseFloat(amount) * 1.07;
            break;
        case "jpy":
            to_usd = parseFloat(amount) * 0.0078;
            break;
        case "cny":
            to_usd = parseFloat(amount) * 0.15;
            break;
    }
    return get_rate_from_eth_craw(amount)
}

function get_rate_from_eth_craw(amount) {
    return new Promise(function (resolve, reject) {
        request({
            url: "https://bitflyer.com/en-us/ethereum-chart",
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const data = [];
            const $ = cheerio.load(body)
            const rate = $(".p-currencyInfo__head");
            var text = rate.text().replace(" ", "")
            var text = text.replace(/\s/g, '')
            var text = text.replace(",", '')
            var final = text.split("*")[0]
            resolve((parseFloat(final) * amount))
        })
    })
}

// export function get_rate(amount, deposit_currency, target_currency) {
//     if (deposit_currency == "eth") {
//         if (target_currency == "eth") {
//             return amount
//         } else {
//             return get_rate_from_eth(amount,)
//         }
//     }
//     return amount
// }


// function getUSDtoNTD() {
//     return new Promise(function (resolve, reject) {
//         request({
//             url: "https://www.exchangerates.org.uk/Dollars-to-Taiwan-Dollar-currency-conversion-page.html",
//             method: "GET"
//         }, (error, res, body) => {
//             if (error || !body) {
//                 console.log("Error")
//             }
//             const data = [];
//             const $ = cheerio.load(body)
//             const rate = $("#shd2a");
//             var text = rate.text();
//             text = text.replace(/\s/g, '');
//             text = text.split("1USD=");
//             text = text[1].split("TWD");
//             var final = text[0];
//             resolve(final);
//         })

//     })
// }

// README
// 使用時採用.then的形式，以getETHtoUSD為例，如下：
// getETHtoUSD().then((function(data){
//     console.log(data); //print result
// }))

// export function get_rate_no_eth(amount, original_currency, target_currency) {
//     return new Promise(function (data) {
//         var to_usd = 0;
//         switch (original_currency) {
//             case "ntd":
//                 to_usd = parseFloat(amount) * 0.034;
//                 break;
//             case "usd":
//                 to_usd = parseFloat(amount);
//                 break;
//             case "gbp":
//                 to_usd = parseFloat(amount) * 1.26;
//                 break;
//             case "aud":
//                 to_usd = parseFloat(amount) * 0.71;
//                 break;
//             case "eur":
//                 to_usd = parseFloat(amount) * 1.07;
//                 break;
//             case "jpy":
//                 to_usd = parseFloat(amount) * 0.0078;
//                 break;
//             case "cny":
//                 to_usd = parseFloat(amount) * 0.15;
//                 break;
//         }
//         switch (target_currency) {
//             case "ntd":
//                 resolve((to_usd / 0.034).toString());
//             case "usd":
//                 resolve(to_usd.toString());
//                 break
//             case "gbp":
//                 resolve(to_usd / 1.26);
//                 break;
//             case "aud":
//                 resolve(to_usd / 0.71);
//             case "eur":
//                 resolve(to_usd / 1.07);
//             case "jpy":
//                 resolve(to_usd / 0.0078);
//             case "cny":
//                 resolve(to_usd / 0.15);
//         }
//     })

// }