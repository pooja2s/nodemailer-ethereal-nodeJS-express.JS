const nodemailer = require("nodemailer");

// To single recipients
const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'marilou.harris@ethereal.email', // username  [For tesing you can create account on ethereal (https://ethereal.email/)]
      pass: 'JpJ9b1D3drB6YSCusv', //password
    },
  });

  let info = await transporter.sendMail({
    from: '"Sender name" <testsender@gmail.com>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "Hello this is for testing Subject", // Subject line
    text: "Hello this is for testing Text", // plain text body
    html: "<b>Hello this is for testing html</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

// To multiple recipients
const sendMultipleMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  
  const maillist = [
    'test@gmail.com',
    'test1@gmail.com',
  ];

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: { 
      user: 'marilou.harris@ethereal.email', // username  [For tesing you can create account on ethereal (https://ethereal.email/)]
      pass: 'JpJ9b1D3drB6YSCusv', //password
    },
  });

  let info = await transporter.sendMail({
    from: '"Sender name" <testsender@gmail.com>', // sender address
    to: maillist, // list of receivers
    subject: "Hello this is for testing Subject", // Subject line
    text: "Hello this is for testing Text", // plain text body
    html: "<b>Hello this is for testing html</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log(info.accepted); // Array of emails that were successful
  console.log(info.rejected); // Array of unsuccessful emails
  res.json(info);
};


//Attachments and images
const sendAttachentMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  
  const maillist = [
    'test@gmail.com',
    'test1@gmail.com',
  ];

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: { 
      user: 'marilou.harris@ethereal.email', // username  [For tesing you can create account on ethereal (https://ethereal.email/)]
      pass: 'JpJ9b1D3drB6YSCusv', //password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let info = await transporter.sendMail({
    from: '"Sender name" <testsender@gmail.com>', // sender address
    to: maillist, // list of receivers
    subject: "Hello this is for testing Subject", // Subject line
    text: "Hello this is for testing Text", // plain text body
    html: `
    <h1>Hello world</h1>
    <p>Here's an image for you</p>
    <img src="cid:unique@gmail.com>"/>'
    `, // Embedded image links to content ID

    attachments: [{
      filename: 'image.png',
      path: './women.png',
      cid: 'unique@gmail.com' // Sets content ID
    },
    {
      filename: 'image.png',
      path: './men.png',
    }]

  });

  console.log("Message sent: %s", info.messageId);
  console.log(info.accepted); // Array of emails that were successful
  console.log(info.rejected); // Array of unsuccessful emails
  res.json(info);
};

module.exports = sendMail;
module.exports = sendMultipleMail;
module.exports = sendAttachentMail;
