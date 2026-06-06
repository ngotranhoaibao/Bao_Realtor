import { success, error } from "../utils/response.js";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  toggleUserStatus,
} from "../services/admin.service.js";

export const getUsersController = async (req, res) => {
  try {
    const { role, status, isActive } = req.query;
    const filters = {};
    if (role) filters.role = role;
    if (status) filters.status = status;
    if (isActive !== undefined) filters.isActive = isActive === "true";
    const users = await getAllUsers(filters);
    return success(res, "Users retrieved successfully", users, 200);
  } catch (err) {
    return error(res, err.message, 500, "INTERNAL_ERROR");
  }
};

export const getUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return error(res, "User not found", 404, "NOT_FOUND");
    }
    return success(res, "User retrieved successfully", user, 200);
  } catch (err) {
    return error(res, err.message, 500, "INTERNAL_ERROR");
  }
};

export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const user = await updateUser(id, updateData);
    if (!user) {
      return error(res, "User not found", 404, "NOT_FOUND");
    }
    return success(res, "User updated successfully", user, 200);
  } catch (err) {
    return error(res, err.message, 500, "INTERNAL_ERROR");
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    if (!user) {
      return error(res, "User not found", 404, "NOT_FOUND");
    }
    return success(res, "User deleted successfully", null, 200);
  } catch (err) {
    return error(res, err.message, 500, "INTERNAL_ERROR");
  }
};

export const toggleUserStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await toggleUserStatus(id);
    return success(res, "User status toggled successfully", user, 200);
  } catch (err) {
    return error(res, err.message, 500, "INTERNAL_ERROR");
  }
};
