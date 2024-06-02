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
        let important = req.body.important === "on" ? true : false
        await dbConnect()
        const newTask = await Task.create({...req.body, important: important})
        console.log(newTask)
        return res.status(201).json(newTask)
    } catch (error) {
        console.error(error)
        throw new Error ("Something went wrong.")
    }
})


app.get("/getTasks", async (req, res) => {
    try {
        await dbConnect()
        const taskList = await Task.find()
        return res.status(201).json(taskList)
    } catch (error) {
        console.error(error)
        throw new Error ("Something went wrong.")
    }
})

app.listen(port, async () => {
    console.log(`Listening on port ${port}!`)
})

