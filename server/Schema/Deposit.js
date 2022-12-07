const mongoose = require("mongoose");

const depositSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentImage: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    charge: {
      default: 0,
      type: String,
    },
    status: {
      type: String,
      default: "Transaction Pending",
    },
    paid: {
      type: String,
      default: false,
    },
    date: {
      type: String,
      required: [true, "Please Enter Data"],
    },
  },
  {
    timestamps: true,
  }
);

const Deposits = mongoose.model("deposits", depositSchema);
module.exports = Deposits;
