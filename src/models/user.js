const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    phone: { type: String, trim: true, default: null },
    email: { type: String, trim: true, default: null },
    name: { type: String, trim: true, default: "" },
    password: { type: String },
    otp: { type: String, default: null },
    otp_expiry: { type: Date, default: Date.now },
    country: { type: String, default: "IN" },
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female", "other"],
    },
    profile_image: { type: String, default: null },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", user);
module.exports = { User };
