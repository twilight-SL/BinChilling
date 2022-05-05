import request from "request";
import cheerio from "cheerio"; "cheerio";
import "fs";
import "console";

function getETHtoUSD() {
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
        console.log("Function Obtained Result:" + final);
        return final
    })
}

function getUSDtoNTD() {
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
        console.log("Function Obtained Result:" + final);
        return final;
    })
}


export { getETHtoUSD, getUSDtoNTD }
