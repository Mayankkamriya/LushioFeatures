import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_email: email,
    };

    try {
      const response = await emailjs.send(
        "service_fmhyhmp", // Your EmailJS service ID
        "template_ib4bjpb", // Your EmailJS template ID
        templateParams,
        "iCttfqtmzCAM54dRa" // Your EmailJS public key
      );

      if (response.status === 200) {
        // If the email is successfully sent
        setSuccessMessage("Email sent successfully!");
        setEmail(""); // Clear input

        // Hide success message after 2 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      setErrorMessage("Failed to send email. Please try again later.");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000); // Reset error message after 2 seconds
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default EmailForm;





// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const EmailForm = () => {
//   const [email, setEmail] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       user_email: email, // Make sure this matches the field in your EmailJS template
//     };

//     // Use EmailJS to send the email
//     emailjs
//       .send(
//         // "YOUR_SERVICE_ID", // Your EmailJS service ID
//         "service_fmhyhmp",
//         // "YOUR_TEMPLATE_ID", // Your EmailJS template ID
//         "template_6d4eg6h",
//         templateParams,
//         // "YOUR_PUBLIC_KEY" // Your EmailJS public key
//         "iCttfqtmzCAM54dRa"
//       )
//       .then(
//         (response) => {
//           console.log("Email successfully sent!", response.status, response.text);

//           // Show success message for 2 seconds
//           setSuccessMessage("Email sent successfully!");
//           setEmail(""); // Clear input if the email is successfully sent

//           setTimeout(() => {
//             setSuccessMessage("");
//           }, 2000);
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           setErrorMessage("Failed to send email. Please try again later.");
//         }
//       )
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Sending..." : "Submit"}
//         </button>
//       </form>
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default EmailForm;
