var express = require("express")
var app = express()
var cors = require('cors')

app.use(cors())
app.use (express.json())


app.get("/", (req,res) => {
    res.send("Api is running serverless")
})


module.exports = app