import axios from './config'

export const getCategoryList =()=>{
    return axios.get('/categoryList')
}