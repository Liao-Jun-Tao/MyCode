import dotenv from 'dotenv';// 私密保险箱
dotenv.config()
/** 
 * 应用配置
 * process 进程对象 进程是程序分配资源的最小单元
 * thread 程序运行的最小单元 
 * GPU 显卡 更适合并行计算 css transform 3D canvas 3D
 * CPU 线性计算
 * process.env 是 Node.js 中的一个全局变量，用于访问环境变量
 * js 会默认作为前端静态编译 不支持process  
 * 给定类型声明文件@types/process 在编译时可以知道如何处理
 */
export const { APP_PORT } = process.env;  
/** 
 * 数据库配置
 */         
export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env;

export const { ALLOW_ORIGIN } = process.env;
export let { PUBLIC_KEY } = process.env;
PUBLIC_KEY = Buffer.from(PUBLIC_KEY, 'base64').toString();