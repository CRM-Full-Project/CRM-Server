import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { createUserDto, updateUserDto } from '../dto/user.dto.js';

import { validateDto } from '../middlewares/validate.js';

const router = Router();

// CRUD User
router.post('/', validateDto(createUserDto), userController.createUser);     // Tạo mới user
router.get('/', userController.getAllUsers);     // Lấy tất cả user
router.get('/:id', userController.getUserById);  // Lấy user theo id
router.put('/:id', validateDto(updateUserDto), userController.updateUser);   // Cập nhật user
router.delete('/:id', userController.deleteUser);// Xóa user

export default router;