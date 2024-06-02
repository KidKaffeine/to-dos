const mongoose = require("mongoose");

const task = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: { type: Date, default: Date.now },
    important: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", task);

module.exports = Task;
