import { Next, Context } from 'koa';

/**
 * 错误中间件
 */
export const defaultErrorHandler = (
    error: any,
    ctx: Context,
    next: Next,
) => {
    if (error.message) {
        console.log(error.message);
    }
    let statusCode: number, message: string
    switch(error.message) {
        // 登录或注册表单 后端重新注册
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message  = '请提供密码';
            break;
        case 'NAME_ALREADY_EXISTS':
            statusCode = 409;
            message = '用户名已占用'
            break;
        case 'USER_DOES_NOT_EXIST':
            statusCode = 400;
            message  = '用户不存在'
            break;
        case 'PASSWORD_DOSE_NOT_MATCH':
            statusCode = 400;
            message = '密码不正确'
            break;
        case 'UNAUTHORIZED':
            statusCode = 401;
            message = '请先登录'
            break;
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode = 403;
            message = '您没有权限处理这个内容'
            break;
        default:
            statusCode = 500;
            message = '服务器暂时除了一点小问题~ 程序员小哥哥正在抢修' 
            break;
    }
    ctx.status = statusCode;
  ctx.body = message;
  return ctx.app.emit("error", error, ctx);
}
