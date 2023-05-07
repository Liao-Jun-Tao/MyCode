# 一. 项目初始化npm 初始化

1. npm 初始化

```
npm init -y
```

生成 package.json文件

- 项目依赖

# 二. 搭建项目

1. 安装koa框架

```
npm install koa @types/koa
```
2. 编写最基本的app
- 创建 `src/main.ts` 入口文件
```
const Koa = require('koa')

const app = new Koa()

app.use((ctx:any,next:any)=>{
    ctx.body = 'hello word!'
})

app.listen(3000,()=>{
    console.log('服务启动');
})
```


- 安装 `nodemon  ts-node` ts兼容文件
```
npm install nodemon -D 
npm intall ts-node
```
3. 在package.json配置启动文件
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"nodemon src/main.ts"
  },
```
5. 启动app 
```
npm run dev
```
6. 启动成功

   ![image-20230428183830733](C:\Users\liaojuntao\AppData\Roaming\Typora\typora-user-images\image-20230428183830733.png)