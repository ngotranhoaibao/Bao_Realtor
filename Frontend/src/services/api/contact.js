import api from "./index";

export const submitContact = async (contactData) => {
  return await api.post("/contact", contactData);
};
