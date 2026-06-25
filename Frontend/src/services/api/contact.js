import api from "./index";

export const submitContact = async (contactData) => {
  console.debug(
    "submitContact -> baseURL:",
    api.defaults.baseURL,
    "payload:",
    contactData,
  );
  try {
    const res = await api.post("/contact", contactData);
    return res;
  } catch (err) {
    // Log axios error details for easier debugging in browser and server logs
    try {
      const json = typeof err?.toJSON === "function" ? err.toJSON() : null;
      console.error("submitContact Axios error:", json || err);
    } catch (loggingErr) {
      console.error("submitContact error (logging failed):", loggingErr, err);
    }
    throw err;
  }
};
