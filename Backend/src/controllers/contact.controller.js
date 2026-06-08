import { success, error } from "../utils/response.js";
import Contact from "../models/contact.model.js";
import { sendEmail } from "../utils/email.js";

export const submitContactController = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone) {
      return error(res, "Both name and phone are required.", 400);
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message ? message.trim() : "(no message)";

    const contact = await Contact.create({
      name: trimmedName,
      phone: trimmedPhone,
      message: trimmedMessage,
    });

    const emailText = `New contact submission:\n\nName: ${trimmedName}\nPhone: ${trimmedPhone}\nMessage: ${trimmedMessage}`;
    const emailHtml = `
      <h2>New contact submission</h2>
      <p><strong>Name:</strong> ${trimmedName}</p>
      <p><strong>Phone:</strong> ${trimmedPhone}</p>
      <p><strong>Message:</strong> ${trimmedMessage}</p>
    `;

    // Try to send email but do not fail the whole request if SMTP errors occur.
    try {
      await sendEmail({
        subject: `New contact from ${trimmedName}`,
        text: emailText,
        html: emailHtml,
      });
      return success(
        res,
        "Contact saved and email sent successfully",
        contact,
        201,
      );
    } catch (emailErr) {
      console.error(
        "Failed to send contact email:",
        emailErr?.message || emailErr,
      );
      return success(
        res,
        "Contact saved but failed to send email",
        { contact, emailError: emailErr?.message || String(emailErr) },
        201,
      );
    }
  } catch (err) {
    return error(res, err.message || "Failed to submit contact", 500);
  }
};
