const express = require("express")
require('dotenv').config()
const dbConnect = require("./db/dbConnect/dbConnect")

const app = express()
const port = 7000


app.listen(port, async () => {
    console.log(`Listening on port ${port}!`)
    dbConnect()
})

