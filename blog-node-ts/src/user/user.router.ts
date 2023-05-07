import express from 'express';
import * as userController from './user.controller'
import { hashPassword,validateUserData } from './user.middleware'
const router = express.Router(); 
/**
 * restful
 * users post 新增
 */
router.post('/users',validateUserData, hashPassword, userController.store);// 涉及CSRF攻击
/**
 * 导出路由
 */
export default router;