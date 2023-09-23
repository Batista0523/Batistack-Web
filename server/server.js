import express from 'express';
import { json } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(json());

app.post("/contact-form", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'batista_pro1@hotmail.com',
      pass: 'Sunset809!!',
    },
  });

  const mailOptions = {
    from: 'elisaulbatista@pursuit.org',
    to: 'batista_pro1@hotmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error: Unable to send email.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
