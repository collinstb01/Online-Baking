const express = require("express");
const {
  getDeposits,
  updateKycStatus,
  updateDepositStatus,
  getWithdrawal,
  loginAdmin,
  getDashboardData,
  getUsers,
} = require("../controllers/Admin");

const router = express.Router();

router.get("/dashboard-data", getDashboardData);
router.post("/login-admin", loginAdmin);
router.get("/get-withdrawals", getWithdrawal);
router.get("/get-deposits", getDeposits);
router.patch("/update-kyc", updateKycStatus);
router.patch("/update-deposit", updateDepositStatus);
router.get("/get-users", getUsers);

module.exports = router;

//  const [dataa, setDataa] = useState([]);
//  const [loading, setloading] = useState(true);
//  useEffect(async () => {

//  }, []);

//  if (loading) {
//    return <h1>Loading...</h1>;
//  }
