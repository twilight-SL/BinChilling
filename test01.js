import * as exchange from "./database/get_exchange_rate.js";
import * as sql from "./database/sql.js"
import express from 'express'
import * as stock from "./database/stock_craw.js"
import fs from 'fs';
import { dirname } from 'path'
import { stringify } from 'querystring';
import { fileURLToPath } from 'url'
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

stock.getStock_Specific_Day(2330, 2022,5,4).then(function(data){
    console.log(data)
})