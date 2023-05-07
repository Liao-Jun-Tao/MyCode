import { UserModel } from './user.model';
export declare const getUser: (condition: string) => (param: string) => Promise<any>;
export declare const createUser: (user: UserModel) => Promise<any>;
export declare const getUserByName: (param: string) => Promise<any>;
