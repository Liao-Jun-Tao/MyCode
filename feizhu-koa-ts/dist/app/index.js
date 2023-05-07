"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const { koaBody } = require('koa-body');
const userRouter = require('./user/user.router')();
const app = new Koa();
app.use(koaBody());
app.use(userRouter.routes());
exports.default = app;
//# sourceMappingURL=index.js.map