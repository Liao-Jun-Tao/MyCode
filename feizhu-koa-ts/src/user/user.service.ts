import { connection } from '../app/database/mysql'; 
import { UserModel } from './user.model';

/**
 * 查询用户是否存在
 */
export const getUser = (condition: string) => {
    return async (param: string) => {
        const statement = `
            SELECT
                user.id,
                user.name
                IF(
                    COUNT(avatar.id), 1, NULL
                    ) AS avatar
            FROM
                user
            WHERE
                ${condition} = ?
        `;

        const [data] = await connection.promise().query(statement, param);
        return data[0]?.id ? data[0] : null;
    }
}
/**
 * 创建用户
 */
export const createUser = async (user:UserModel) => {
    const statement =  `
        INSERT INTO user
        SET ?
    `
    const [data] = await connection.promise().query(statement, user);

    return data;
}
/**
 * 按用户名获取用户
 */
export const getUserByName = getUser('user.name')
