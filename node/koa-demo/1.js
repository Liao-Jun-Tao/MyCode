// http 服务  基于请求和响应
//  为了资源 
const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
// 中间件函数的方式提供服务
const main = ctx => {
    if(ctx.request.path !=='/'){
        ctx.response.type = 'html'
        ctx.response.body = '<a href=""/>Index Page</a>'
    }else{
        ctx.response.body = 'Hello World' 
    }
    // ctx 上下文 response 结束
    // ctx.response.body = 'hello world'
    // ctx.response.type = 'html'  //  设置响应头
    // MVC
    // ctx.response.body = fs.createReadStream('./template.html')
}
app.use(main)
app.listen(3001)
