import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, // true for 465, false for other ports
  auth: {
    user: "meghasingh2k24@gmail.com",
    pass: "oqafyhynkzomopxm",
  },
});

export async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: "meghasingh2k24@gmail.com",
      to,
      subject,
      text, // plain‑text body
      html, // html body
    });
    console.log('Email sent:', info.response);
  } catch (err) {
    console.error('Error sending email:', err);
    throw err;
  }
}