import * as exchange from "./database/get_exchange_rate.js";
import * as sql from "./database/sql.js"
import express from 'express'
import * as stock from "./database/stock_craw.js"
import fs from 'fs';
import { dirname } from 'path'
import { stringify } from 'querystring';
import { fileURLToPath } from 'url'
import { SlowBuffer } from "buffer";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Pre-setting
const app = express();
const port = 2335;
app.use(express.static(`${__dirname}`))

app.listen(port, () => {
    console.log("Port: " + port);
})


app.get('/0homepage_newEmailSubscribe', function (req, res) {
    sql.newEmailSubscribe(req.query.emailToAdd).then(function (data) {
        console.log(data)
        res.send(data);
    })
})



app.get('/sign_up', function (req, res) {
    sql.newUser(req.query.username, req.query.password, req.query.email).then(function (data) {
        res.send(data)
    })
})

app.get('/sign_in', function (req, res) {
    sql.verifyUser(req.query.email, req.query.password).then(function (data) {
        res.send(data)
    })
})

app.get('/new_bank_account', function (req, res) {
    sql.newBankAccount(req.query.username, req.query.hostname, req.query.bank_account_id, req.query.deposit_currency, req.query.deposit_amount, req.query.account_type).then(function (data) {
        res.send(data)
    })
})

// #exchange
app.get('/get_rate', function (req, res) {
    exchange.get_rate(req.query.amount, req.query.original_currency, req.query.target_currency).then(function (data) {
        res.send(data)
    })
})


// #stock
app.get('/get_stock', function(req,res){
    stock.getStock(req.query.stock_code,req.query.CEyear,req.query.month).then(function(data){
        res.send(data)
    })
})

app.get('/get_stock_specific_day', function(req,res){
    stock.getStock_Specific_Day(req.query.stock_code, req.query.CEyear, req.query.month, req.query.day).then(function(data){
        res.send(data)
    })
})

app.get('/get_stock_name', function(req,res){
    stock.getStock_name(req.query.stock_code).then(function(data){
        res.send(data)
    })
})

app.get('get_stock_month_average',function(req,res){
    stock.getStock_month_average(req.query.stock_code,req.query.CEyear, req.query.month)
})

// stock.getStock_Specific_Day(2330,2022,5,10).then(function(data){
//     console.log(data)
// })


// exchange.get_rate_pend(35,"usd","gbp").then(function(data){
//     console.log(data)
// })
