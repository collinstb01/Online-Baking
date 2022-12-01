const express = require("express");
const {
  registerUser,
  loginUser,
  verifyCode,
  deposit,
  getUser,
  getDeposits,
  updateUser,
  updatePassword,
  resendCode,
  resetPassord,
  getAccount,
  withdrawal,
  getWithdrawals,
} = require("../controllers/User");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/verify-code", verifyCode);
router.post("/deposit", deposit);
router.post("/withdraw", withdrawal);
router.get("/getuser/:id", getUser);
router.get("/getdeposit/:id", getDeposits);
router.get("/getwithdrawal/:id", getWithdrawals);
router.patch("/update-user", updateUser);
router.patch("/update-password", updatePassword);
router.post("/resendcode", resendCode);
router.post("/resetpassword", resetPassord);
router.get("/getaccount", getAccount);

module.exports = router;
