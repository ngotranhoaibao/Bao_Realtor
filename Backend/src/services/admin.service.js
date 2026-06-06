import User from "../models/user.model.js";

export const getAllUsers = async (filters = {}) => {
  const query = {};
  if (filters.role) query.role = filters.role;
  if (filters.status) query.status = filters.status;
  if (filters.isActive !== undefined) query.isActive = filters.isActive;
  return await User.find(query).select("-password -refreshToken");
};

export const getUserById = async (id) => {
  return await User.findById(id).select("-password -refreshToken");
};

export const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true }).select(
    "-password -refreshToken",
  );
};

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export const toggleUserStatus = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  user.isActive = !user.isActive;
  await user.save();
  return user.select("-password -refreshToken");
};
