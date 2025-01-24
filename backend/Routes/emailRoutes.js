const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendEmail', async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL, // Sender's email
        pass: process.env.PASSWORD // Sender's email password
      },
    });
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL, 
      subject: 'Test Email',
      text: 'This is a test email sent via backend API!',
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

module.exports = router;
