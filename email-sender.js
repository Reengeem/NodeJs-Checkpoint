const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "sani@yahoo.com",
    pass: "doitandtryagain",
  },
});

const mailOptions = {
  from: "sani@yahoo.com",
  to: "reengeem@yahoo.com",
  subject: "Testing Email sender using Node.js",
  text: "Nothing to see here, but it works",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("sending failed", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
