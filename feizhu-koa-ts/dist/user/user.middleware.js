const { Next, Context } = require('koa');
const bcrypt = require('bcrypt');
const userService = require('./user.service');
exports.validateUserData = async (ctx, next) => {
    const { name, password } = ctx.request.body;
    if (!name)
        return next(new Error('NAME_IS_REQUIRED'));
    if (!password)
        return next(new Error('PASSWORD_IS_REQUIRED'));
    const user = await userService.getUserByName(name);
    if (user)
        return next(new Error('USER_ALREADY_EXIST'));
    next();
};
exports.hashPassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    next();
};
//# sourceMappingURL=user.middleware.js.map