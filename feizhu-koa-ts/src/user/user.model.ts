import { hashPassword } from './user.middleware';
//interface type 类
export class UserModel{
    id?:number;
     name?:string;
     password:string;
     hashPassword?:string;
}