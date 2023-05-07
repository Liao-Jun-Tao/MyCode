import { connection } from '../app/database/mysql'; 
import { UserModel } from './user.model';

export const getUser = (condition: string) => {
    return async (param: string) => {
        // user.name   user.id  user.name =   user.password = 
        // sql 模板？WHERE 分支
        const statement = `
            SELECT
                user.id,
                user.name
            FROM
                user
            WHERE
                ?? = ?
        `;

        const [data] = await connection.promise().query(statement, [condition, param]);
        return data[0]?.id ? data[0] : null;
    };
};

/**
 * 创建用户
 */
export const createUser = async (user: UserModel) => {
    const statement = `
        INSERT INTO user
        SET ?
    `;
    const [data] = await connection.promise().query(statement, user);
    return data;
};

/**
 * 按用户名获取用户
 */
export const getUserByName = getUser('user.name');

export const getUserById = getUser('user.id');
// added the ?? placeholder for the column name in the WHERE clause and changed the statement parameter in query to an array with the column name and param.
