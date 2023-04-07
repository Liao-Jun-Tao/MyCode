const Koa = require('koa')
const config = require('./config/default.js')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
const signupRouter = require('./routers/signup.js')
const postsRouter = require('./routers/posts.js')

// views 在那里
app.use(staticCache(path.join(__dirname, './public'), {dynamic: true}, {
    maxAge: 15*24*60*60
}))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
// HTTP报文主要分为请求报文和响应报文，koa-bodyparser主要针对请求报文的处理。
app.use(bodyParser({
    formLimit: '1mb'
}))
// 如何记录一个请求所花时间
// 第一个 计时开始
// app.use(async (ctx, next) => {
//     console.log('中间件1')
//     const start = new Date().getTime();
//     await next();
//     const end = new Date().getTime();
//     console.log('请求花费时间为', end - start, ' ms')
// })

// app.use(async (ctx, next) => {
//     console.log('中间件2')
//     const data = await getData()
//     ctx.body = {data}
// })

// const getData = async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
//     return 'Hello World'
// }

app.use(signupRouter.routes())
app.use(postsRouter.routes())
app.listen(config.port)

console.log(`listening on port ${config.port}`)