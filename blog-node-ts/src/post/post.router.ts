import express from 'express';
import * as postController from './postcontroller';

const router = express.Router();
/**
 * 内容列表
 * Restful api
 * 返回JSON
 * MVC MV不能直接沟通 Controller
 */
router.get(
    '/posts',

)

export default router;