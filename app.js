const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./controllers/sendMail");
const sendMultipleMail = require("./controllers/sendMail");
const sendAttachentMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/mail", sendMail);
app.get("/mail-multiple", sendMultipleMail);
app.get("/mail-attachment", sendAttachentMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Port coneected to .  ${PORT}`);
    });
  } catch (error) {}
};

start();
