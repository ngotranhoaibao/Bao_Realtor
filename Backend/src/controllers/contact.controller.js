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

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const emailText = `Liên hệ mới từ form landing page:\n\nTên: ${trimmedName}\nSố điện thoại: ${trimmedPhone}\nThời gian: ${timestamp}\nNội dung: ${trimmedMessage}`;
    const emailHtml = `
      <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f5f7fb; color:#111; padding:24px;">
        <div style="max-width:720px; margin:0 auto; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 24px 80px rgba(15,23,42,0.08);">
          <div style="background:#0f172a; color:#f8fafc; padding:28px 32px;">
            <h2 style="margin:0; font-size:1.6rem; letter-spacing:.02em;">Thông tin liên hệ mới</h2>
            <p style="margin:.75rem 0 0; color:#cbd5e1; font-size:.95rem;">Đã nhận từ form landing page The Lumia Đà Nẵng.</p>
          </div>
          <div style="padding:28px 32px 32px;">
            <table style="width:100%; border-collapse:collapse; font-size:.95rem; color:#334155;">
              <tr>
                <td style="padding:.75rem 0; width:140px; font-weight:700; vertical-align:top;">Tên:</td>
                <td style="padding:.75rem 0;">${trimmedName}</td>
              </tr>
              <tr>
                <td style="padding:.75rem 0; font-weight:700; vertical-align:top;">Số điện thoại:</td>
                <td style="padding:.75rem 0;">${trimmedPhone}</td>
              </tr>
              <tr>
                <td style="padding:.75rem 0; font-weight:700; vertical-align:top;">Thời gian:</td>
                <td style="padding:.75rem 0;">${timestamp}</td>
              </tr>
              <tr>
                <td style="padding:.75rem 0; font-weight:700; vertical-align:top;">Nội dung:</td>
                <td style="padding:.75rem 0;">${trimmedMessage.replace(/\n/g, "<br />")}</td>
              </tr>
            </table>
            <p style="margin:24px 0 0; color:#475569; font-size:.9rem;">Vui lòng phản hồi khách hàng càng sớm càng tốt.</p>
          </div>
        </div>
      </div>
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
