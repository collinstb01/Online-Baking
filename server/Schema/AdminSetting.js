const mongoose = require("mongoose");

const AdminSettingSchema = mongoose.Schema({
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  accountnumber: {
    type: String,
  },
  accountName: {
    type: String,
  },
  nameOfAccount: {
    type: String,
  },
});

const AdminSetting = mongoose.model("settings", AdminSettingSchema);
module.exports = AdminSetting;
