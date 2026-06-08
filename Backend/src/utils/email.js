import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const host = process.env.EMAIL_HOST || "smtp.gmail.com";
const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587;
const secure =
  typeof process.env.EMAIL_SECURE !== "undefined"
    ? process.env.EMAIL_SECURE.toLowerCase() === "true"
    : false;

const user = process.env.EMAIL_USER;
const rawPass = process.env.EMAIL_PASS || "";
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
      "Email credentials are not configured. Set EMAIL_USER and EMAIL_PASS in .env.",
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
