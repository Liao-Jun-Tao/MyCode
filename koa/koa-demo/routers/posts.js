const routers = require('koa-router')();
const controller = require('../controller/c-posts')

//
routers.get('/posts', controller.getPosts )

module.exports =  routers