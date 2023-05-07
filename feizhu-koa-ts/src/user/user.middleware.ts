const { Next, Context } = require('koa');
const bcrypt = require('bcrypt');
const userService = require('./user.service');

/**
 * 验证用户数据
 */
exports.validateUserData = async(ctx, next) => { 
    const {name, password} = ctx.request.body
    // 使用错误中间件
    if (!name) return next(new Error('NAME_IS_REQUIRED'));
    if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));

     // name 是否重名  service 层  sql 处理的
     const user = await userService.getUserByName(name);
     if (user) return next(new Error('USER_ALREADY_EXIST'));
     next();
}



/**
 * HASH 加密
 */
exports.hashPassword = async (ctx, next)=>{
    const { password } =ctx.request.body
    next()
}


