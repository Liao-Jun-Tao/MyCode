import { Request, Response, NextFunction }  from 'express';
import * as userService from './user.service';

export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 请求体中解出用户名、密码
    const { name, password } = request.body;
    console.log(name, password, request.body, '/////');
    // 数据库和node服务器是分离的
    try {
        const data = await userService.createUser({name,password});
        response.status(201).send(data);
    } catch (error) {
        next(error);// 往后传递，给错误处理中间件处理eeror
    }
}