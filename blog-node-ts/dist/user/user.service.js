"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.createUser = exports.getUser = void 0;
const mysql_1 = require("../app/database/mysql");
const getUser = (condition) => {
    return async (param) => {
        var _a;
        const statement = `
            SELECT
                user.id
            FROM
                user
            WHERE
                ${condition} = ?
        `;
        const [data] = await mysql_1.connection.promise().query(statement, param);
        return ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.id) ? data[0] : null;
    };
};
exports.getUser = getUser;
const createUser = async (user) => {
    const statement = `
        INSERT INTO user
        SET ?
    `;
    const [data] = await mysql_1.connection.promise().query(statement, user);
    return data;
};
exports.createUser = createUser;
exports.getUserByName = (0, exports.getUser)('user.name');
//# sourceMappingURL=user.service.js.map