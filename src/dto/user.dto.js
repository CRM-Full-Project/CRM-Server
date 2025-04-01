import Joi from 'joi';

// Schema kiểm tra dữ liệu khi tạo user
export const createUserDto = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Schema kiểm tra dữ liệu khi cập nhật user
export const updateUserDto = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  email: Joi.string().email().optional(),
});

// Format response khi trả về
export const userResponseDto = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});