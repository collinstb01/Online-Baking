// const

const AdminSetting = require("../Schema/AdminSetting");
const Deposits = require("../Schema/Deposit");
const User = require("../Schema/User");
const Withdrawal = require("../Schema/Withdrawals");
const withdrawal = require("../Schema/Withdrawals");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await AdminSetting.find();

    if (email !== admin[0].email && password !== admin[0].password) {
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

  return res.status(200).json({ message: "Loggedin", deposits });

  try {
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

const getWithdrawal = async (req, res) => {
  const withdrawals = await withdrawal.find();

  return res.status(200).json({ message: "Gotten Successfully", withdrawals });

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
    console.log(status);
    if (status == "rejected") {
      await Deposits.deleteOne({ _id: id });
      // await Deposits.deleteOne({_id:  })
    } else {
      await Deposits.updateOne(
        { _id: id },
        {
          $set: {
            status: "Transaction Approved",
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
      const some = await User.updateOne(
        { _id: userId, "transactions.$.id": id },
        {
          $set: {
            status: "Transaction Approved",
            paid: true,
          },
        }
      );
      const some2 = await User.findOne({ _id: userId });
      console.log(some, some2);
    }

    console.log(user.accountBalance, amount);

    return res.status(200).json({ message: "Successfully Updated" });
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

const updateWithdrawalStatus = async (req, res) => {
  const { id, amount, status, userId } = req.body;

  console.log({ id, amount, userId, status });
  try {
    const user = await User.findById({ _id: userId });
    console.log(status);
    if (status == "rejected") {
      await Withdrawal.deleteOne({ _id: id });
      // await Deposits.deleteOne({_id:  })

      const userdata = user.transactions.find((val) => val.id == id);
      console.log(userdata);

      userdata.status = "Transaction Rejected";
      userdata.paid = false;
      await User.findOneAndUpdate({ _id: userId }, user, { new: true });
    } else {
      await Withdrawal.updateOne(
        { _id: id },
        {
          $set: {
            status: "Transaction Approved",
          },
        }
      );

      await Withdrawal.updateOne(
        { _id: id },
        {
          $set: {
            paid: true,
          },
        }
      );

      const userdata = user.transactions.find((val) => val.id == id);
      user.accountBalance = parseInt(user.accountBalance) - parseInt(amount);
      userdata.status = "Transaction Approved";
      userdata.paid = true;

      await User.findOneAndUpdate({ _id: userId }, user, { new: true });
    }

    console.log(user.accountBalance, amount);

    return res.status(200).json({ message: "Successfully Updated" });
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
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({ message: "Gotten", users });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const adminSettings = async (req, res) => {
  const { password, email, accountnumber, accountName, nameOfAccount } =
    req.body;

  console.log({ password, email, accountnumber, accountName, nameOfAccount });
  let id = "6360008e751217b021cc410e";

  try {
    const settings = await AdminSetting.find({
      _id: id,
    });

    console.log(settings);
    const update = await AdminSetting.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: password !== "" ? password : settings[0].password,
          email: email !== "" ? email : settings[0].email,
          accountnumber:
            accountnumber !== "" ? accountnumber : settings[0].accountnumber,
          accountName:
            accountName !== "" ? accountName : settings[0].accountName,
          nameOfAccount:
            nameOfAccount !== "" ? nameOfAccount : settings[0].nameOfAccount,
        },
      }
    );

    console.log(update);

    res.status(200).json({ message: "Updated" });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const createSettings = async (req, res) => {
  const { password, email, accountnumber, accountName, nameOfAccount } =
    req.body;
  try {
    const settings = new AdminSetting({
      password,
      email,
      accountnumber,
      accountName,
      nameOfAccount,
    });

    await settings.save();
    return res.status(200).json({ message: "Successfully Saved", settings });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const getSettings = async (req, res) => {
  try {
    const settings = await AdminSetting.find();

    return res.status(200).json({ message: "Successfully Gotten", settings });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const chnageDate = async (req, res) => {
  const { id, date, userId, status } = req.body;
  try {
    let deposit;
    if (status == "d") {
      deposit = await Deposits.findOne({ _id: id });
    } else {
      deposit = await Withdrawal.findOne({ _id: id });
    }
    const user = await User.findOne({ _id: userId });
    const userrr = user.transactions.filter((val) => val.id == id);

    deposit.date = date;
    userrr[0].date = date;
    if (status == "d") {
      await Promise.all([
        Deposits.findOneAndUpdate({ _id: id }, deposit, {
          new: true,
        }),
        User.findOneAndUpdate({ _id: userId }, user, {
          new: true,
        }),
      ]);
    } else {
      await Promise.all([
        Withdrawal.findOneAndUpdate({ _id: id }, deposit, {
          new: true,
        }),
        User.findOneAndUpdate({ _id: userId }, user, {
          new: true,
        }),
      ]);
    }

    console.log(userrr);
    console.log(deposit.createdAt);
    return res
      .status(200)
      .json({ message: "Successfully Updated date", deposit });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

const deleteOnehistory = async (req, res) => {
  const { userId, transactionId } = req.body;
  try {
    console.log(userId);
    const user = await User.findOne({ _id: userId });
    const update = await Withdrawal.deleteOne({ _id: transactionId });
    const update2 = await Deposits.deleteOne({ _id: transactionId });

    console.log(user.transactions.length);
    console.log(update);
    console.log(update2);

    const arr = user.transactions.filter((val) => val.id != transactionId);

    user.transactions = arr;
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, user, {
      new: true,
    });
    console.log(updatedUser.transactions.length);
    return res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

const deleteAllHistory = async (req, res) => {
  const { userId } = req.body;
  try {
    const [user, updateOne, updateTwo] = await Promise.all([
      await User.findOne({ _id: userId }),
      await withdrawal.deleteMany({ id: userId }),
      await Deposits.deleteMany({ id: userId }),
    ]);
    console.log(user);
    console.log(updateOne);
    console.log(updateTwo);

    user.transactions = [];
    user.accountBalance = 0;
    user.withdrawals = 0;

    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, user, {
      new: true,
    });
    console.log(updatedUser);
    return res
      .status(200)
      .json({ message: "Successfully deleted all history" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDeposits,
  getWithdrawal,
  updateKycStatus,
  updateDepositStatus,
  loginAdmin,
  getUsers,
  getDashboardData,
  adminSettings,
  getSettings,
  createSettings,
  chnageDate,
  updateWithdrawalStatus,
  deleteAllHistory,
  deleteOnehistory,
};
