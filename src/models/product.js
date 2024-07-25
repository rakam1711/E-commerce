const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    // Catagory: { type: mongoose.Schema.ObjectId, ref: "Catagory" },
    productName: { type: String, trim: true, required: true, unique: true },
    productPrice: { type: Number, trim: true, required: true },
    productRating: { type: Number },
    discount: { type: Number },
    description: { type: String, trim: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", product);

module.exports = { Product };
