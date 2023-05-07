import express from 'express';// 老牌的node开发框架
import cors from 'cors';
import { ALLOW_ORIGIN } from './app.config';
import postRouter from '../post/post.router';
import { defaultErrorHandler } from '../app/app.middleware';
import userRouter from '../user/user.router';
import { currentUser } from '../auth/auth.middleware'
/**
 * 创建应用
 */
const app = express();
/**
 * 处理json
 */
app.use(express.json());
/**
 * 当前用户
 */
app.use(currentUser);
/** 
 * 跨域资源共享
 */
app.use(
    cors({
        origin: ALLOW_ORIGIN,
        // 可以跨资源共享的头部
        exposedHeaders: 'X-Total-Count'
    })
);
/**
 * 路由
 */
app.use(
    postRouter,
    userRouter
)

app.use(defaultErrorHandler)
/**
 * 导出应用
 */
export default app;