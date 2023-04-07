const router = require('koa-router')();
//控制权control层
const controller = require('../controller/c-signup');
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);  
module.exports = router;