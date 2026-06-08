import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Allow either EMAIL_* or SMTP_* env vars. Trim any whitespace in password (app
// passwords are sometimes shown with spaces).
const host =
  process.env.EMAIL_HOST || process.env.SMTP_HOST || "smtp.gmail.com";
const port = process.env.EMAIL_PORT
  ? Number(process.env.EMAIL_PORT)
  : process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : 587;
const secure =
  typeof process.env.EMAIL_SECURE !== "undefined"
    ? process.env.EMAIL_SECURE.toLowerCase() === "true"
    : typeof process.env.SMTP_SECURE !== "undefined"
      ? process.env.SMTP_SECURE.toString().toLowerCase() === "false"
      : port === 587;

const user = process.env.EMAIL_USER || process.env.SMTP_USER;
const rawPass = process.env.EMAIL_PASS || process.env.SMTP_PASS || "";
const pass = rawPass.replace(/\s+/g, "");

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
});

export const sendEmail = async ({
  subject,
  text,
  html,
  to = process.env.EMAIL_TO || user,
}) => {
  if (!user || !pass) {
    throw new Error(
      "Email credentials are not configured. Set EMAIL_USER/SMTP_USER and EMAIL_PASS/SMTP_PASS in .env.",
    );
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM || user,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

export const verifyTransporter = async () => {
  try {
    await transporter.verify();
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err };
  }
};
