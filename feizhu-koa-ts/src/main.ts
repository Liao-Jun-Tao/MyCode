import  app  from './app/app'
const { APP_PORT } = require('./app/app.config')

app.listen(APP_PORT, () => {
    console.log(`服务器成功启动在${APP_PORT}端口`)
})

const { connection } = require('./app/database/mysql')
connection.connect(error => {
    if (error) {
        console.log('链接数据库失败', error.message);
        return;
    } else {
        console.log('数据库连接成功');
    }
})