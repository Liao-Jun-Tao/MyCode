import axios from './config'

export const getSwiperList =()=>{
    return axios.get('/swiperList')
}

export const getSortList =()=>{
    return axios.get('/sortList')
}

export const getProductList =()=>{
    return axios.get('/productList')
}