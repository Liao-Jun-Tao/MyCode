const Koa = require('koa')
const cors = require('cors');
const { ALLOW_ORIGIN } = require('./app.config')
const { koaBody } = require('koa-body')
const userRouter = require('./user/user.router')()
const { defaultErrorHandler } = require('../app/app.middleware')
/**
 * 创建应用
 */
const app =  Koa()

app.use(koaBody())
/**
 * 跨资源共享
 */
app.use(
    cors({
        origin: ALLOW_ORIGIN,
        // 可以跨域资源共享的头部
        exposedHeaders: 'X-Total-Count'
    })
);
/**
 * 路由
 */
app.use(userRouter.routes())

export default app

