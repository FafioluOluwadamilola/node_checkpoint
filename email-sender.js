require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER, 
  to: process.env.EMAIL_USER,   
  subject: 'Birthday Email',
  text: 'Hi I know a lot of people forgot about your birthday yesterdaybut dont get angry about it, after all u knew it was going to end up like this ',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});