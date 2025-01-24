import React from 'react';
import './SendEmailer.css';
import axios from 'axios';

const SendEmailer = () => {
  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sendEmail', {
        to: process.env.REACT_APP_RECEIVER_EMAIL,
        subject: 'Test Email',
        text: 'This is a test email sent from the frontend!',
      });

      alert(response.data.message);
    } catch (error) {
      alert('Error sending email');
      console.error('Error:', error);
    }
  };

  return (
    <div className="send-email-container">
      <button onClick={sendEmail} className="send-email-button">
        go for Send Email
      </button>
    </div>
  );
};

export default SendEmailer;




// import React from 'react';
// import './sendEmailer.css';
// import nodemailer from 'nodemailer';

// const SendEmailer = () => {
//   const sendEmail = async () => {
//     try {
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'withsticker1@gmail.com', // Hardcoded sender email
//           pass: '#mayank99', // Hardcoded email password
//         },
//       });
//       console.log('sending email....')

//       const mailOptions = {
//         from: 'withsticker1@gmail.com', // Hardcoded sender email
//         to: 'kamriyamnoj45@gmail.com', // Hardcoded recipient email
//         subject: 'Test Email', // Hardcoded subject
//         text: 'This is a test email sent using Nodemailer directly in React!', // Hardcoded email content
//       };

//       // Send email
//       await transporter.sendMail(mailOptions);
//       alert('Email sent successfully!');
//     } catch (error) {
//       alert('Error sending email');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="send-email-container">
//       <button onClick={sendEmail} className="send-email-button">
//         Send Email1
//       </button>
//     </div>
//   );
// };

// export default SendEmailer;



// const nodemailer = require('nodemailer');

// // Create the transporter with hardcoded email credentials
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'withsticker1@gmail.com', // Sender's email address
//     pass: '#mayank99', // Sender's email password
//   },
// });

// // Function to send the email
// const sendEmail = async () => {
//   const mailOptions = {
//     from: 'withsticker1@gmail.com', // Sender's email address
//     to: 'kamriyamanoj45@gmail.com', // Recipient's email address
//     subject: 'Welcome to Our Service!', // Email subject
//     text: 'Hello! This is a test email sent from your application.', // Email content
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);
//   } catch (error) {
//     console.error('Error sending email: ', error);
//   }
// };

// // Call the function to send the email
// sendEmail();

// module.exports = sendEmail;



// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });
// console.log('Email...Password....',process.env.EMAIL, process.env.EMAIL_PASSWORD)
// const sendEmail = async (to, subject, text) => {
//   const mailOptions = {
//     from: process.env.EMAIL,
//     to,
//     subject,
//     text,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
