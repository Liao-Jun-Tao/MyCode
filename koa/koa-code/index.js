let httpOnly = require('http') //内置 https net 
// 基于请求响应
let server = httpOnly.createServer((req , res) => {
      res.end('hello world')
})

app.listen(4000)