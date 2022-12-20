const mongoose = require("mongoose");

const WithdrawalSchema = mongoose.Schema(
  {
    BeneficiaryaccNo: {
      type: String,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    accName: {
      type: String,
    },
    status: {
      type: String,
      default: "Transaction Pending",
    },
    bankName: {
      type: String,
    },
    bankAddr: {
      type: String,
    },
    swCode: {
      type: String,
    },
    routingNumber: {
      type: String,
    },
    amount: {
      type: String,
    },
    otpCode: {
      type: String,
    },
    id: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Withdrawal = mongoose.model("Withdrawal", WithdrawalSchema);
module.exports = Withdrawal;
