import * as userService from '../services/user.service.js';
import { apiResponseDto } from '../dto/apiResponse.js';

// Tạo người dùng mới
export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    
    res.status(201).json(apiResponseDto({code: 201,message: "User created successfully", result: user}));
  } catch (error) {
    res.status(500).json(apiResponseDto({ code: 500, message: error.message }));
  }
};

// Lấy tất cả người dùng
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(apiResponseDto({code: 200, result: users}));
  } catch (error) {
    res.status(500).json(apiResponseDto({ code: 500, message: error.message }));
  }
};

// Lấy người dùng theo ID
export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json(apiResponseDto({ code: 404, message: 'User not found' }));
    res.status(200).json(apiResponseDto({code: 200, result: user}));
  } catch (error) {
    res.status(500).json(apiResponseDto({ code: 500, message: error.message }));
  }
};

// Cập nhật người dùng
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.updateUser(id, req.body);
    res.status(200).json(apiResponseDto({code: 200, message: 'User updated successfully' }));
  } catch (error) {
    res.status(500).json(apiResponseDto({ code: 500, message: error.message }));
  }
};

// Xóa người dùng
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).json(apiResponseDto({code: 200, message: 'User deleted successfully' }));
  } catch (error) {
    res.status(500).json(apiResponseDto({ code: 500, message: error.message }));
  }
};