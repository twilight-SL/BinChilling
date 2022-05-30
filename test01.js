import * as exchange from "./database/get_exchange_rate.js";
import * as sql from "./database/sql.js"
import express from 'express'
import fs from 'fs';
import { dirname } from 'path'
import { stringify } from 'querystring';
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Pre-setting
const app = express();
const port = 2330;
app.use(express.static(`${__dirname}`))

app.listen(port, ()=>{
    console.log(port);
})


app.get('/0homepage_newEmailSubscribe',function(req,res){
    sql.newEmailSubscribe(req.query.emailToAdd).then(function(data){
        console.log("d")
        console.log(data)
        res.send(data);
        console.log("e")
    })
})

sql.getAllDepositByCategory("f", "ntd").then(function(data){
console.lo
console.log()
})


