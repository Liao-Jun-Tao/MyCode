"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const cors = require('cors');
const { ALLOW_ORIGIN } = require('./app.config');
const { koaBody } = require('koa-body');
const userRouter = require('./user/user.router')();
const { defaultErrorHandler } = require('../app/app.middleware');
const app = Koa();
app.use(koaBody());
app.use(cors({
    origin: ALLOW_ORIGIN,
    exposedHeaders: 'X-Total-Count'
}));
app.use(userRouter.routes());
exports.default = app;
//# sourceMappingURL=app.js.map