const mongoose = require("mongoose")

const task = mongoose.Schema({
    task: String, 
    category: String, 
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const Task = mongoose.model("Tasks", task)

module.exports = Task;