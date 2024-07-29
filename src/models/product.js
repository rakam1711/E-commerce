const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    Category: { type: mongoose.Schema.ObjectId, ref: "Category" },
    productName: { type: String, trim: true, required: true, unique: true },
    productPrice: { type: Number, trim: true, required: true },
    discount: { type: Number },
    description: { type: String, trim: true, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", product);

module.exports = { Product };
