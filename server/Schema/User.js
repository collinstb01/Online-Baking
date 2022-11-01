const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid emaial",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
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
      // required: true,
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
      required: [true, "Please Enter a Value"],
    },
    zip: {
      type: String,
      required: [true, "Please Enter a Value"],
    },
    address: {
      type: String,
      required: [true, "Please Enter Address"],
    },
    city: {
      type: String,
      required: [true, "Please Enter City"],
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
