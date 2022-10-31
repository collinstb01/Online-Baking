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

const generateToken = (id) => {
  return jwt.sign({ id }, "test", { expiresIn: "1d" });
};
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
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
  }

  if (password !== password_confirmation) {
    res.status(400);
    throw new Error("Password Doesnt Match");
  }

  if (agree !== true) {
    res.status(400);
    throw new Error("Please Agreed to our terms and policy");
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "Email has already been registered" });
    throw new Error("Email has already been registered");
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
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    res.status(200).json({
      message: "successful",
      user,
    });
  } else {
    res.status(400).json({ message: error.message });
    throw new Error("Invalid user data");
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(password, email);

  // Validate Request
  if (!email || !password) {
    res.status(400).json({ message: "Please add email and password" });
    throw new Error("Please add email and password");
  }

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "User not found, please signup" });
    throw new Error("User not found, please signup");
  }

  // User exists, check if password is correct
  const isPasswordCorrect = password == user.password;
  //   Generate Token
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user.emailVerifycation == false) {
    return res
      .status(401)
      .json({ message: "Please Verify Your Account", user });
  }

  if (user && isPasswordCorrect) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(200).json({ message: "Succesffully Logined", user });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
    throw new Error("Invalid email or password");
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

  const message = htmlToSend;
  const subject = "Code Verification Request";
  const send_to = email;
  const sent_from = "cllnsflx40@gmail.com";

  try {
    sendEmail(subject, message, send_to, sent_from);
    // res.status(201).json({ success: true, message: "Reset Email Sent" });
  } catch (error) {
    console.log(error);
    // res.json({ error });
    // throw new Error("Email not sent, please try again");
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
            status: "Pending",
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

    res.status(200).json({ message: "Successfully Gottnen User", user });
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

    res
      .status(200)
      .json({ message: "Successfully Gottnen deposits", deposits });
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

    res.status(200).json({ message: "Successfully Updated", update });
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
    res.status(200).json({ message: "Successfully Changed Password", update });
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

    res.status(200).json({ message: "Code Sent", update });
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
    res.status(200).json({ message: "Successfully Changed Password", update });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

const getAccount = async (req, res) => {
  try {
    const details = await AdminSetting.find();

    res.status(200).json({ message: "User Details", details });
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
};
