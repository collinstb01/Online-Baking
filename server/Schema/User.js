const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      //   maxLength: [23, "Password must not be more than 23 characters"],
    },
    address: String,
    country: String,
    phone: {
      type: String,
      default: "+234",
    },
    emailVerifycation: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
    },
    accountBalance: {
      type: Number,
      default: 0,
    },
    kycVerifycation: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
    },
    zip: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    accountNumber: {
      type: String,
      unique: true,
    },
    withdrawals: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: "https://smartsavecontribution.com/placeholder-image/350x300",
    },
    transactions: Array,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
