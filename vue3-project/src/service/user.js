import axios from './config'

export const getUserList =()=>{
    return axios.get('/userList')
}