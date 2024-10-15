const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config(); // Load environment variables

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// Define the port number for the server
const PORT = 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Verify the email credentials loaded from environment variables
console.log("Email User:", process.env.EMAIL_USER);

// Configure Nodemailer transport for sending emails
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify the Nodemailer setup
contactEmail.verify((error) => {
  if (error) {
    console.error("Nodemailer error:", error);
  } else {
    console.log("Nodemailer is ready to send emails.");
  }
});

// Define the route for handling contact form submissions
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ 
      code: 400, 
      status: "All fields are required." 
    });
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Use your email from environment variables
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ 
        code: 500, 
        status: "Failed to send message. Please try again later." 
      });
    } 
    // Send success response
    res.status(200).json({ 
      code: 200, 
      status: "Message Sent" 
    });
  });
});

// Define the route for handling subscriptions
router.post("/subscribe", (req, res) => {
  const { email } = req.body;

  // Validate the email
  if (!email || !email.includes("@")) {
    return res.status(400).json({ 
      code: 400, 
      status: "A valid email is required." 
    });
  }

  // Here, you can save the email to your database or perform any other logic
  // For this example, we will just log it
  console.log("New subscription email:", email);

  // Send success response
  return res.status(200).json({ 
    code: 200, 
    status: "Subscription successful!" 
  });
});
