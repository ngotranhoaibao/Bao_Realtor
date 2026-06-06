import express from "express";
const router = express.Router();
import {
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
  toggleUserStatusController,
} from "../controllers/admin.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/admin.middleware.js";

router.get("/users", protect, adminOnly, getUsersController);
router.get("/users/:id", protect, adminOnly, getUserController);
router.put("/users/:id", protect, adminOnly, updateUserController);
router.delete("/users/:id", protect, adminOnly, deleteUserController);
router.patch(
  "/users/:id/toggle-status",
  protect,
  adminOnly,
  toggleUserStatusController,
);

export default router;
