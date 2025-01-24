const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL, // Sender's email address
        pass: process.env.RECEIVER_EMAIL
    },
});
const sendEmail = async (to, subject, text) => {
    console.log('sendingn email in backend....')
    const mailOptions = {
        from: process.env.SENDER_EMAIL, // Sender's email address
        to: process.env.RECEIVER_EMAIL, // Recipient's email address
        subject: 'Welcome to Our Service!', // Email subject
        text: 'Hello! This is a test email sent from your application.', // Email content
      };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
