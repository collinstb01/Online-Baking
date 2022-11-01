// const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const user = require("./Routes/User");
const admin = require("./Routes/Admin");

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

console.log();

app.get("/", (req, res) => {
  res.send("App Running");
});

app.use("/api", user);
app.use("/api/admin", admin);

// main().catch(console.error);

const PORT = process.env.PORT || 5001;
mongoose
  .connect(
    "mongodb+srv://jayden38400:jayden38400@cluster0.fjvosxd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log("App running at port 5001 And Successfully Connected")
    )
  )
  .catch((error) => console.log(error));
