const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  // Create Email Transporter
  console.log("about sending....");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "smartsavers021@gmail.com",
      pass: "emanfwmxzpmrwnvv",
    },
  });
  // emanfwmxzpmrwnvv;
  console.log("sending....");
  // Option for sending email
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;

// <!DOCTYPE html>

// <body>

//   <div style="background-color: #80808080; padding: 10px 0px; width: 100%;color: white; text-align: center;">
//     <img src="https://smartsavecontribution.com/assets/images/logoIcon/logo.png" alt="" style="width: 100px;">
//     <h2>Hello {{name}}</h2>
//     <p>Please use the Code to Verify Your Account</p>

//     <h3>Your code is</h3>
//     <h1>{{code}}</h1>
//     <p>Regards...</p>
//     <p>Smartsavers Team</p>
//   </div>

// </body>

// </html>
