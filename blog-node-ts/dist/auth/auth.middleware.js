"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_config_1 = require("../app/app.config");
const currentUser = (request, response, next) => {
    let user = {
        id: null,
        name: 'anonymous'
    };
    try {
        const authorization = request.header('Authorization');
        const token = authorization.replace('Bearer', '');
        if (token) {
            const decodde = jsonwebtoken_1.default.verify(token, app_config_1.PUBLIC_KEY, {
                algorithms: ['RS256']
            });
            user = decodde;
        }
    }
    catch (error) {
    }
    next();
};
exports.currentUser = currentUser;
//# sourceMappingURL=auth.middleware.js.map