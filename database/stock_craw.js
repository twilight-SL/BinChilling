import request from "request";
import cheerio from "cheerio"; "cheerio";
import "fs";
import "console";
import { createWriteStream } from "fs";


export function getStock(stock_code, CEyear, month) {
    if (month < 10) {
        month = "0" + month
    }
    return new Promise(function (resolve, reject) {
        request({
            url: "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=html&date=" + CEyear + month + "24&stockNo=" + stock_code,
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const $ = cheerio.load(body)
            resolve(stock_date_price_merge(body))
        })
    })
}

export function getStock_month_average(stock_code, CEyear, month) {
    if (month < 10) {
        month = "0" + month
    }
    return new Promise(function (resolve, reject) {
        request({
            url: "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=html&date=" + CEyear + month + "24&stockNo=" + stock_code,
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const $ = cheerio.load(body)
            var data = stock_date_price_merge(body)
            resolve(stock_calculate_month_average(data))
        })
    })
}

export function getStock_name(stock_code) {
    return new Promise(function (resolve, reject) {
        request({
            url: "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=html&date=20200224&stockNo=" + stock_code,
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const $ = cheerio.load(body)
            var data = $("body > div > table > thead > tr:nth-child(1) > th > div").text()
            var data = data.split(/\s/g)[2]
            resolve(data)
        })
    })
}

export function getStock_Specific_Day(stock_code, CEyear, month, day) {
    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        day = "0" + day
    }
    CEyear = CEyear - 1911
    var dayToFind = CEyear + "/" + month + "/" + day
    return new Promise(function (resolve, reject) {
        request({
            url: "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=html&date=" + (CEyear + 1911) + month + "24&stockNo=" + stock_code,
            method: "GET"
        }, (error, res, body) => {
            if (error || !body) {
                console.log("Error")
            }
            const $ = cheerio.load(body)
            var data = stock_date_price_merge(body)
            var toReturn = "Stock_Data_Of_The_Day_Not_Found"
            for (day = 0; day < data.length; day++) {
                if (data[day][0] == dayToFind) {
                    toReturn = data[day][1]
                    break;
                }
            }

            resolve(toReturn)
        })
    })
}


function stock_date_price_merge(body) {
    const $ = cheerio.load(body)
    var toReturn = []
    var result = $("body > div > table > tbody > tr:nth-child(1) > td:nth-child(7)").text()
    for (var day = 1; day <= $("body > div > table > tbody > tr").length; day++) {
        var innerToAdd = [$("body > div > table > tbody > tr:nth-child(" + day + ") > td:nth-child(1)").text(), $("body > div > table > tbody > tr:nth-child(" + day + ") > td:nth-child(7)").text()]
        toReturn.push(innerToAdd)
    }
    return toReturn
}

function stock_calculate_month_average(processed_month_array) {
    var total = 0;
    for (var day = 0; day < processed_month_array.length; day++) {
        total += parseFloat(processed_month_array[day][1])
    }
    return (total / processed_month_array.length)
}