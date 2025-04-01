import User from '../models/user.model.js';
import { userResponseDto } from '../dto/user.dto.js';

// Tạo người dùng mới
export const createUser = async (data) => {
  return userResponseDto(await User.create(data));
};

// Lấy tất cả người dùng
export const getAllUsers = async () => {
    const users = await User.findAll()
  return users.map(userResponseDto);
};

// Lấy người dùng theo ID
export const getUserById = async (id) => {
  return userResponseDto(await User.findByPk(id));
};

// Cập nhật người dùng
export const updateUser = async (id, data) => {
  return userResponseDto(await User.update(data, { where: { id } }));
};

// Xóa người dùng
export const deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};