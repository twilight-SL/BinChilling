import request from "request";
import cheerio from "cheerio"; "cheerio";
import "fs";
import "console";

export function get_rate(amount, original_currency, target_currency){
    var to_usd = 0;
    switch(original_currency){
        case "ntd":
            to_usd = parseFloat(amount) * 0.034;
            break;
        case "usd":
            to_usd = parseFloat(amount);
            break;
        case "eth":
            getETHtoUSD(parseFloat(amount)).then(function(data){
                to_usd = parseFloat(data);
            }
            )
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
    switch(target_currency){
        case "ntd":
            return to_usd / 0.034;
        case "usd":
            return to_usd;
        case "eth":
            getETHtoUSD(parseFloat(amount)).then(function(data){
                return to_usd = to_usd /parseFloat(data);
            }
            )
        case "gbp":
            return to_usd / 1.26;
            break; 
        case "aud":
            return to_usd / 0.71;
        case "eur":
            return to_usd / 1.07;
        case "jpy":
            return to_usd / 0.0078;
        case "cny":
            return to_usd / 0.15;
    }
}

function getETHtoUSD() {
return new Promise (function(resolve, reject){
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
        var final = text.split("*")[0]
        // console.log("Function Obtained Result:" + final);
        resolve(final)
    })
})
}

function getUSDtoNTD() {
    return new Promise(function(resolve, reject){
        request({
            url: "https://www.exchangerates.org.uk/Dollars-to-Taiwan-Dollar-currency-conversion-page.html",
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const data = [];
            const $ = cheerio.load(body)
            const rate = $("#shd2a");
            var text = rate.text();
            text = text.replace(/\s/g, '');
            text = text.split("1USD=");
            text = text[1].split("TWD");
            var final = text[0];
            // console.log("Function Obtained Result:" + final);
    
            resolve(final);
    
    })

    })
}

// README
// 使用時採用.then的形式，以getETHtoUSD為例，如下：
// getETHtoUSD().then((function(data){
//     console.log(data); //print result
// }))


export { get_rate, getETHtoUSD, getUSDtoNTD }
