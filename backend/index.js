const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const password = process.env.PASS;

const app = express();
const port = 5000;

// Middleware
app.use(cors()); 
app.use(bodyParser.json());


app.post('/send-email', (req, res) => {
    // console.log(req.body);
    const { user_name, user_email, user_subject, user_message } = req.body;
    // console.log( user_name+ user_email+ user_subject+user_message);
    // Create a transporter with your email service details
    const transporter = nodemailer.createTransport({
        service: 'CUSTOM', 
        port: 993,
        host: 'imap.us.appsuite.cloud',
        secure: true,
        auth: {
            user: 'support@imaigen.ai', 
            pass: Shaik@321 
        }
    });
    console.log(user_email);
    // Email message to Admin
    const mailAdminOptions = {
        from: user_email,
        to: 'support@imaigen.ai',
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
        `
    };
    
    // Send email
    transporter.sendMail(mailAdminOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });

    // Email message to client
    const mailClientOptions = {
        from: 'support@imaigen.ai',
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
                    <p>Best regards,</p>
                    <p>shaikmohammadusman</p>
                    <p>@imaigen.ai</p>
                    <p>Contact:+91 8179871764</p>
                </div>
            </div>
        </body>
        
        </html>`
    };
    // Send email
    transporter.sendMail(mailClientOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });

});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
