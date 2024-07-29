const mongoose = require("mongoose");

const category = new mongoose.Schema({
  gender: { type: String, default: "both", enum: ["male", "female", "both"] },
  name: { type: String, trim: true, unique: true },
  description: { type: String },
});

const Category = mongoose.model("Category", category);

module.exports = { Category };
