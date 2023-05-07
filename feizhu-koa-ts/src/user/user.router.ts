const Router = require('koa-router')
const { register,login } = require('./user.controller')
const { hashPassword, validateUserData } =require( './user.middleware')

const router = new Router({prefix:'/users'})

// 注册接口
router.get('/register', register)

// 登录接口
router.get('/login',login)


module.exports = router