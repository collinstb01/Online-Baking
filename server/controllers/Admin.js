// const

const Deposits = require("../Schema/Deposit");
const User = require("../Schema/User");
const withdrawal = require("../Schema/Withdrawals");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (
      email !== "smartsavers2012@gmail.com" &&
      password !== "smartsavers2012"
    ) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }

    return res.status(200).json({ message: "Invalid Credentials" });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const getDeposits = async (req, res) => {
  const deposits = await Deposits.find();

  res.status(200).json({ message: "Loggedin", deposits });

  try {
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

const getWithdrawal = async (req, res) => {
  const withdrawals = await withdrawal.find();

  res.status(200).json({ message: "Gotten Successfully", withdrawals });

  try {
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

const updateKycStatus = async (req, res) => {
  const { id } = req.body;

  try {
    const updateUser = await User.updateOne(
      { _id: id },
      {
        $set: {
          kycVerifycation: true,
        },
      }
    );

    return res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const updateDepositStatus = async (req, res) => {
  const { id, amount, status, userId } = req.body;

  console.log({ id, amount, userId });
  try {
    const user = await User.findById({ _id: userId });
    const deposit = await Deposits.findById({ _id: id });
    if (status == "rejected") {
      await Deposits.updateOne(
        { _id: id },
        {
          $set: {
            status: "Rejected",
          },
        }
      );
    } else {
      await Deposits.updateOne(
        { _id: id },
        {
          $set: {
            status: "Confirmed",
          },
        }
      );

      await Deposits.updateOne(
        { _id: id },
        {
          $set: {
            paid: true,
          },
        }
      );

      await User.updateOne(
        { _id: userId },
        {
          $set: {
            accountBalance: parseInt(user.accountBalance) + parseInt(amount),
          },
        }
      );
      console.log(id);
      const some = await User.updateOne(
        { _id: userId, "transactions.$.id": id },
        {
          $set: {
            status: "Approved",
            paid: true,
          },
        }
      );
      const some2 = await User.findOne({ _id: userId });
      console.log(some, some2);
    }

    console.log(user.accountBalance, amount);

    res.status(200).json({ message: "Successfully Updated" });
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

const getDashboardData = async (req, res) => {
  try {
    const userLength = await User.count();
    const depositLength = await Deposits.count();
    const depositAmout = await Deposits.find();

    const arr = [];
    const amountArr = depositAmout.map((val) => {
      return arr.push(val.amount);
    });
    console.log(arr);

    const amount = arr.reduce((val, currentValue) => {
      console.log(val.amount, typeof val.amount);
      return val + currentValue;
    });
    // console.log(depositAmout);
    // console.log(amount);

    return res.status(200).json({ amount, userLength, depositLength });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  getDeposits,
  getWithdrawal,
  updateKycStatus,
  updateDepositStatus,
  loginAdmin,
  getDashboardData,
};
