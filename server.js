const express = require("express")
require('dotenv').config()
const cors = require("cors")

const app = express()
const port = 5000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const dbConnect = require("./db/dbConnect/dbConnect")
const Task = require('./db/Schema/schema')

app.post("/addTask", async (req, res) => {
    try {
        await dbConnect()
        const newTask = await Task.create(req.body)
        return res.status(201).json(newTask)
    } catch (error) {
        console.error(error)
        throw new Error ("Something went wrong.")
    }
})

app.listen(port, async () => {
    console.log(`Listening on port ${port}!`)
})

