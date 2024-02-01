# Send Emails With Nodemailer Using Ethereal In Node.js | Express.js

---------------------------------------------

In this tutorial, we will learn how to send emails with nodemailer using ethereal in a Node.js application developed with Express.js framework.

To send emails using Nodemailer in an Express app, you will need to install the Nodemailer module first. You can install Nodemailer using npm (Node Package Manager) by running the following command in your terminal:

- [Express](http://expressjs.com/) to handle HTTP requests and responses.
- [Nodemailer](https://nodemailer.com/about/) is a module available for
Node.js applications to allow easy as cake email sending. It supports SMTP,
Sendmail and Stream transport methods.
- The ethereal package provides an in-memory smtp server that can be used for
testing purposes. This makes it perfect for integration tests where you need
to send emails but don't want to actually send them.

## Installation
- npm install nodemailer 
- npm install nodemon
- npm install express

## Usage

- npm install
- npm start

## Ethereal

Ethereal [https://ethereal.email/] is a fake SMTP service, mostly aimed at Nodemailer and EmailEngine users (but not limited to). It's a completely free anti-transactional email service where messages never get delivered.

To test the functionality of mail send you have to go  through the following steps:
1. Go to https://ethereal.email/create
2. Click on "Create new account" button
3. You will get the temporary username and password which can be used in controllers/sendMail.js
4. Use this information in `transporter = nodemailer.createTransport({...})` inside `sendEmail()` function
5. Run the application using `npm start` or `nodemon app.js`.
6. Open http://localhost:5000/mail in your browser for single mail send, for Multiple open http://localhost:5000/mail-multiple and for Attachments and images open http://localhost:5000/mail-attachment.
7. An email should arrive at the provided email address. If not check if you have entered the correct email address or whether there are any spam filters blocking the email.
7. An email should arrive at the provided email id i.e you have to go message section on ethereal [https://ethereal.email/messages].




   ![nm_logo_200x136](https://github.com/pooja2s/nodemailer-ethereal-nodeJS-express.JS/assets/90834017/ace467fd-cab8-4523-87c9-4cc9aee34658)
