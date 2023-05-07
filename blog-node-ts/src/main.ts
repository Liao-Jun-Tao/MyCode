// let a = 1; 单点入口文件
import app from './app';// app的生成都模块化出去了
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql'
// 安全稳定,端口也是很隐私 nginx服务器引擎 proxy代理 http 80 https 443
app.listen(APP_PORT, () => {
    console.log('服务启动');
})

connection.connect(error => {
    if (error) {
        console.log('error!');
        return;
    }
    console.log('connect!')
})