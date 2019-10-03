const express = require('express')
const config = require('./configs/environment.js')
const bodyparser = require('body-parser')


const app = express();

app.use(bodyparser.urlencoded({extended: true}))

app.use(bodyparser.json())

app.engine('html', require('ejs').renderFile);
//Routes
const router = require('./routes/routes') 

app.use("/",router) 


app.listen(config.port,() => {

	console.log("API running ",config.port)

})