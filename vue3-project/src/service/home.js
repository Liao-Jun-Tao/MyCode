import axios from './config'

export const getIconList =()=>{
    return axios.get('/iconList')
}