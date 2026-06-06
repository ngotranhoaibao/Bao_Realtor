import { error } from "../utils/response.js";

export const adminOnly = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return error(res, "Access denied. Admin only.", 403, "FORBIDDEN");
  }
  next();
};
