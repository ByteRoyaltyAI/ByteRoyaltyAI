const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();


const app = express();
const port = 5000;


// Middleware
const allowedOrigins = [
  process.env.ALLOWED_ORIGIN1,
  process.env.ALLOWED_ORIGIN2,
  process.env.ALLOWED_ORIGIN3
];
console.log(process.env.NODEMAILER_PASS,process.env.ALLOWED_ORIGIN3)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Got it!");
});


// Transporter for both endpoints
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "support@imaigen.ai",
    pass: process.env.NODEMAILER_PASS, 
  },
});

app.post("/bookconsultation", async (req, res) => {
  console.log("hello")
  const { date, time, email, message } = req.body;
  console.log("Data Received:");
  console.log(message);

  const mailAdminOptions = {
    from: "support@imaigen.ai",
    to: "support@imaigen.ai",
    subject: "New Consultation Booking",
    text: `Email: ${email}\nTime: ${time}\nDate: ${date}\nMessage: ${message}`,
    html: `
      <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px;">
        <p style="color: #333; font-size: 18px;"><strong>Email:</strong> ${email}</p>
        <p style="color: #333; font-size: 18px;"><strong>Time:</strong> ${time}, ${date}</p>
        <hr style="border-top: 1px solid #ccc; margin: 20px 0;">
        <p style="color: #555; font-size: 16px;"><strong>Message:</strong></p>
        <p style="color: #777; font-size: 16px;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailAdminOptions);
    console.log("Email sent to Admin");
    res.status(200).send("Consultation Successfully Booked!");
  } catch (error) {
    console.error("Error in /bookconsultation:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/book-a-demo", async (req, res) => {
  const { workEmail,firstName,lastName,companyName, message } = req.body;
  console.log("Data Received:");
  console.log(message);

  const mailAdminOptions = {
    from: "support@imaigen.ai",
    to: "support@imaigen.ai",
    subject: "New Consultation Booking",
    text: `Company Name: ${companyName} Work Email: ${workEmail}\n Company Name: ${companyName} 
    \n First Name: ${firstName}\n Last Name: ${lastName}\n Message: ${message}`,
    html: `
      <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px;">
        <p style="color: #333; font-size: 18px;"><strong>Work Email:</strong> ${workEmail}</p>
        <p style="color: #333; font-size: 18px;"><strong>Company Name:</strong> ${companyName}</p>
        <p style="color: #333; font-size: 18px;"><strong>Client Name:</strong> ${firstName}, ${lastName}</p>
        <hr style="border-top: 1px solid #ccc; margin: 20px 0;">
        <p style="color: #555; font-size: 16px;"><strong>Message:</strong></p>
        <p style="color: #777; font-size: 16px;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailAdminOptions);
    console.log("Email sent to Admin");
    res.status(200).send("Success");
  } catch (error) {
    console.error("Error in /bookconsultation:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/send-email", (req, res) => {
  const { user_name, user_email, user_subject, user_message } = req.body;

  

  // Email message to Admin
  const mailAdminOptions = {
    from: "support@imaigen.ai",
    to: "support@imaigen.ai",
    subject: user_subject,
    text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${user_message}`,
    html: `
            <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px;">
                <p style="color: #333; font-size: 18px;"><strong>Name:</strong> ${user_name}</p>
                <p style="color: #333; font-size: 18px;"><strong>Email:</strong> ${user_email}</p>
                <hr style="border-top: 1px solid #ccc; margin: 20px 0;">
                <p style="color: #555; font-size: 16px;"><strong>Message:</strong></p>
                <p style="color: #777; font-size: 16px;">${user_message}</p>
            </div>
        `,
  };

  // Send email to Admin
  transporter.sendMail(mailAdminOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    }
    console.log("Email sent to Admin: " + info.response);
  });

  const mailClientOptions = {
    from: "support@imaigen.ai",
    to: user_email,
    subject: "Thank You for Contacting Us",
    html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Contacting Us</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f8f8f8;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    color: #333;
                }
        
                .container {
                    max-width: 600px;
                    margin: 50px auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                }
        
                h2 {
                    color: #4CAF50;
                }
        
                p {
                    margin-bottom: 16px;
                    line-height: 1.5;
                }
        
                a {
                    color: #007BFF;
                    text-decoration: none;
                }
        
                a:hover {
                    text-decoration: underline;
                }
        
                .contact-info {
                    margin-top: 20px;
                    font-size: 14px;
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <h2>Thank You for Contacting Us</h2>
                <p>Dear ${user_name},</p>
                <p>We extend our sincere gratitude for reaching out to us. Our team is actively reviewing your request, and we'll respond at the earliest opportunity.</p>
                <p>In the meantime, feel free to explore our website at <a href="https://imaigen.ai/" target="_blank">https://imaigen.ai/</a> for detailed insights into our services and offerings. If you have specific questions or topics you'd like to discuss, please don't hesitate to let us know.</p>
                <p>We highly value your engagement with our platform and look forward to the possibility of collaborating together.</p>
        
                <div class="contact-info">
                    <p>Best Regards,</p>
                    <p>Imaigen Support Team</p>
                    <p>Contact:+91 8179871764</p>
                </div>
            </div>
        </body>
        
        </html>`,
  };

  // Send email to client
  transporter.sendMail(mailClientOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    }
    console.log("Email sent to Client: " + info.response);
    res.send("Email sent successfully!");
  });
});
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
