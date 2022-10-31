const mongoose = require("mongoose");

const withdrawalSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
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
    default: "Pending",
  },
});

const withdrawal = mongoose.model("withdrawal", withdrawalSchema);
module.exports = withdrawal;
