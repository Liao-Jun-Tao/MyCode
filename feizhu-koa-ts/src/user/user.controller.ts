import * as userService from './user.service';
import { Context, Next } from 'koa';
import { UserModel } from './user.model';
import { Request } from 'express';

interface UserRequestBody {
  name: string;
  password: string;
}

export const store = async (ctx: Context, next: Next) => {
  // 请求体中解出用户名、密码
  const { name, password } = (ctx.request as unknown as Request).body as UserRequestBody;
  console.log(name, password, (ctx.request as unknown as Request).body);
  // 数据库和node服务器是分离的
  try {
    const data = await userService.createUser({ name, password });
    ctx.status = 201;
    ctx.body = data;
  } catch (error) {
    next(error); // 往后传递，给错误处理中间件处理error
  }
};

