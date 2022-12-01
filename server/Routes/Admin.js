const express = require("express");
const {
  getDeposits,
  updateKycStatus,
  updateDepositStatus,
  getWithdrawal,
  loginAdmin,
  getDashboardData,
  getUsers,
  adminSettings,
  getSettings,
  createSettings,
  chnageDate,
} = require("../controllers/Admin");

const router = express.Router();

router.get("/dashboard-data", getDashboardData);
router.post("/login-admin", loginAdmin);
router.get("/get-withdrawals", getWithdrawal);
router.get("/get-deposits", getDeposits);
router.get("/get-withdrawals", getWithdrawal);
router.patch("/update-kyc", updateKycStatus);
router.patch("/update-deposit", updateDepositStatus);
router.get("/get-users", getUsers);
router.post("/admin-setting", adminSettings);
router.get("/get-setting", getSettings);
router.post("/create-settings", createSettings);
router.patch("/change-date", chnageDate);

module.exports = router;

//  const [dataa, setDataa] = useState([]);
//  const [loading, setloading] = useState(true);
//  useEffect(async () => {

//  }, []);

//  if (loading) {
//    return <h1>Loading...</h1>;
//  }
