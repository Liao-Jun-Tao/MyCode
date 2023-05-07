const Router = require('koa-router');
const { register, login } = require('./user.controller');
const { hashPassword, validateUserData } = require('./user.middleware');
const router = new Router({ prefix: '/users' });
router.get('/register', register);
router.get('/login', login);
module.exports = router;
//# sourceMappingURL=user.router.js.map