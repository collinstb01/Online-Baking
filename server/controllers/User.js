const User = require("../Schema/User");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Deposits = require("../Schema/Deposit");
const sendEmail = require("../utils/sendEmail");
const { Mongoose } = require("mongoose");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");
const AdminSetting = require("../Schema/AdminSetting");
const nodemailer = require("nodemailer");
const Withdrawal = require("../Schema/Withdrawals");
// Register User

const registerUser = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    email,
    country,
    mobile,
    city,
    zip,
    address,
    password,
    password_confirmation,
    agree,
  } = req.body;

  // Validation
  if (
    (!firstname,
    !lastname,
    !username,
    !email,
    !country,
    !mobile,
    !city,
    !zip,
    !address,
    !password)
  ) {
    res.status(400);
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be up to 6 characters" });
  }

  if (password !== password_confirmation) {
    return res.status(400).json({ message: "Password Doesnt Match" });
  }

  if (agree != true) {
    return res
      .status(400)
      .json({ message: "Please Agree to terms and Policy" });
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res
      .status(400)
      .json({ message: "Email has already been registered" });
  }

  const code = Math.floor(Math.random() * 899999 + 100000);
  const generateNumber = Math.floor(
    Math.random() * 899999999999999 + 100000000000000
  );
  console.log(code);
  // Create new user
  const user = await User.create({
    name: `${firstname} ${lastname}`,
    email,
    password,
    phone: mobile,
    address,
    country,
    city,
    username,
    zip,
    code: code,
    accountNumber: generateNumber,
  });

  let name = `${firstname} ${lastname}`;
  await sendEmailToUser(req, res, name, code, email);

  //   Generate Token

  if (user) {
    return res.status(200).json({
      message: "successful",
      user,
    });
  } else {
    return res.status(400).json({ message: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password, email);

    // Validate Request
    if (!email || !password) {
      return res.status(400).json({ message: "Please add email and password" });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found, please signup" });
    }

    // User exists, check if password is correct
    const isPasswordCorrect = password == user.password;
    //   Generate Token

    // Send HTTP-only cookie

    if (user.emailVerifycation == false) {
      return res
        .status(401)
        .json({ message: "Please Verify Your Account", user });
    }

    if (user && isPasswordCorrect) {
      return res.status(200).json({ message: "Succesffully Logined", user });
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};

const sendEmailToUser = async (req, res, name, code, email) => {
  console.log(name, email);

  const filePath = path.join(__dirname, "../template.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const replacements = {
    name: name,
    code: code,
  };
  const htmlToSend = template(replacements);

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "smartsavers021@gmail.com",
        pass: "emanfwmxzpmrwnvv", // generated ethereal password
        // pass: "nktwzmvxyemczgow", // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: `smartsavers021@gmail.com`, // sender address
      // from: `"${subject}" <${EMAIL__ADDRESS}>`, // sender address
      to: email, // list of receivers
      bcc: email,
      subject: `Code Verification Request`, // Subject line
      // text: `${htmlToSend}`, // plain text body
      html: `${htmlToSend}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // res.status(201).json({ success: true, message: "Reset Email Sent" });
  } catch (error) {
    console.log(error);
    // res.json({ error });
  }
};

const verifyCode = async (req, res) => {
  const { code, id } = req.body;

  console.log(code);
  try {
    const update__user = await User.findOne({ _id: id });

    console.log(update__user);
    if (update__user.code !== code) {
      return res.status(401).json({ message: "Code Not correct" });
    }
    console.log(update__user);

    await User.updateOne(
      { _id: id },
      {
        $set: {
          emailVerifycation: true,
        },
      }
    );
    const user = await User.findOne({ _id: id });

    console.log(updateUser);

    return res.status(200).json({ message: "Succesfully Verified", user });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const deposit = async (req, res) => {
  const { amount, paymentImage, id, date } = req.body;

  console.log(amount);
  try {
    if (date == "" && amount == "" && paymentImage == "") {
      return res.status(400).json({ message: "All Fields are required" });
    }

    const user = await User.findById({ _id: id });
    console.log(user.emailVerifycation);

    if (user.emailVerifycation != true) {
      return res.status(401).json({ message: "Not Verified" });
    }

    // if (user.kycVerifycation != true) {
    //   return res
    //     .status(401)
    //     .json({ message: "Not Verified, Please complete your verification" });
    // }
    const newDeposit = new Deposits({
      id: id,
      amount: amount,
      paymentImage,
      date,
      method: "SMARTSAVERS DEPOSIT",
    });

    await newDeposit.save();

    const update = await User.updateOne(
      { _id: id },
      {
        $push: {
          transactions: {
            id: newDeposit._id.toString(),
            amount: amount,
            paymentImage,
            paymentType: "Deposit",
            method: "SMARTSAVERS DEPOSIT",
            status: "Transaction Pending",
            paid: false,
            date: new Date(),
          },
        },
      }
    );

    console.log(update);
    return res
      .status(200)
      .json({ message: "Deposit Created Successfully, Please Refresh" });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const submitKysc = async (req, res) => {
  const { address, identity } = req.body;

  try {
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findOne({ _id: id });

    return res.status(200).json({ message: "Successfully Gottnen User", user });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const getDeposits = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deposits = await Deposits.find({ id: id });

    return res
      .status(200)
      .json({ message: "Successfully Gottnen deposits", deposits });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const getWithdrawals = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const withdrawals = await Withdrawal.find({ id: id });

    return res
      .status(200)
      .json({ message: "Successfully Gottnen withdrawals", withdrawals });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { id, img, name } = req.body;
  try {
    const user = await User.findOne({ _id: id });
    const update = await User.updateOne(
      { _id: id },
      {
        $set: {
          img: img != "" ? img : user.img,
          name: name != "" ? name : user.name,
        },
      }
    );

    return res.status(200).json({ message: "Successfully Updated", update });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const updatePassword = async (req, res) => {
  const { id, confirmPassword, newPassword, oldPassword } = req.body;
  try {
    const user = await User.findOne({ id: id });

    if (user.password != oldPassword) {
      return res.status(400).json({ message: "Old Password Is not Correct" });
    }

    if (confirmPassword != newPassword) {
      return res.status(400).json({ message: "Please Password Must Match" });
    }

    const update = await User.updateOne(
      { _id: id },
      {
        $set: {
          password: newPassword,
        },
      }
    );
    return res
      .status(200)
      .json({ message: "Successfully Changed Password", update });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const resendCode = async (req, res) => {
  const { email, id, name } = req.body;
  try {
    const code = Math.floor(Math.random() * 899999 + 100000);

    const update = await User.updateOne(
      { _id: id },
      {
        $set: {
          code: code,
        },
      }
    );

    await sendEmailToUser(req, res, name, code, email);

    return res.status(200).json({ message: "Code Sent", update });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const resetPassord = async (req, res) => {
  const { id, confirmPassword, newPassword, oldPassword } = req.body;
  try {
    const user = await User.findOne({ id: id });

    if (user.password != oldPassword) {
      return res.status(400).json({ message: "Old Password Is not Correct" });
    }

    if (confirmPassword != newPassword) {
      return res.status(400).json({ message: "Please Password Must Match" });
    }

    const update = await User.updateOne(
      { _id: id },
      {
        $set: {
          password: newPassword,
        },
      }
    );
    return res
      .status(200)
      .json({ message: "Successfully Changed Password", update });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const getAccount = async (req, res) => {
  try {
    const details = await AdminSetting.find();

    return res.status(200).json({ message: "User Details", details });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const withdrawal = async (req, res) => {
  const {
    BeneficiaryaccNo,
    accName,
    bankName,
    bankAddr,
    swCode,
    routingNumber,
    amount,
    id,
    code,
    withdrawalid,
  } = req.body;

  console.log({
    BeneficiaryaccNo,
    accName,
    bankName,
    bankAddr,
    swCode,
    routingNumber,
    amount,
    id,
  });
  console.log(code);
  try {
    const user = await User.findById({ _id: id });
    const withdrawitem = await Withdrawal.findOne({ _id: withdrawalid });

    if (!withdrawitem) {
      if (
        !BeneficiaryaccNo ||
        !accName ||
        !bankName ||
        !bankAddr ||
        !swCode ||
        !routingNumber ||
        !id ||
        !amount
      ) {
        return res.status(400).json({ message: "All Fields are required" });
      }
    }
    if (user.emailVerifycation != true) {
      return res.status(401).json({ message: "Not Verified" });
    }
    console.log(withdrawitem);
    if (withdrawitem) {
      if (!code) {
        return res.status(401).json({ message: "Please Enter a code" });
      }
      user.accountBalance =
        parseInt(user.accountBalance) - parseInt(withdrawitem.amount);
      withdrawitem.otpCode = code;

      console.log(user);
      await Promise.all([
        await User.findByIdAndUpdate({ _id: id }, user, { new: true }),

        await Withdrawal.findOneAndUpdate({ _id: withdrawalid }, withdrawitem, {
          new: true,
        }),
      ]);
      return res
        .status(200)
        .json({ message: "Withdrew Created Successfully, Please Refresh" });
    } else {
      const newWithdrawal = new Withdrawal({
        BeneficiaryaccNo,
        accName,
        bankName,
        bankAddr,
        swCode,
        routingNumber,
        amount,
        id,
        otpCode: "",
        date: new Date(),
      });

      await newWithdrawal.save();

      console.log(newWithdrawal);
      const [update] = await Promise.all([
        await User.updateOne(
          { _id: id },
          {
            $push: {
              transactions: {
                id: newWithdrawal._id.toString(),
                amount: amount,
                paymentType: "Transfer",
                method: "SMARTSAVERS DEPOSIT",
                status: "Transaction Approved",
                date: new Date(),
              },
            },
          }
        ),
      ]);
      console.log(update);
      return res.status(200).json({
        message: "Withdrew Created Successfully, Please Refresh",
        id: newWithdrawal._id.toString(),
      });
    }
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};
module.exports = {
  registerUser,
  loginUser,
  verifyCode,
  submitKysc,
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
};
