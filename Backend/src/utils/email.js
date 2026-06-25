import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM || "S-Light Tower <onboarding@resend.dev>";
const defaultTo = process.env.EMAIL_TO;
const resend = apiKey ? new Resend(apiKey) : null;

export const sendEmail = async ({ subject, text, html, to = defaultTo }) => {
  if (!apiKey) {
    throw new Error("Resend API key is not configured. Set RESEND_API_KEY.");
  }

  if (!to) {
    throw new Error("Email recipient is not configured. Set EMAIL_TO.");
  }

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message || "Failed to send email with Resend.");
  }

  return data;
};

export const verifyTransporter = async () => {
  if (!apiKey) {
    return {
      ok: false,
      error: new Error("Resend API key is not configured. Set RESEND_API_KEY."),
    };
  }

  return { ok: true };
};
