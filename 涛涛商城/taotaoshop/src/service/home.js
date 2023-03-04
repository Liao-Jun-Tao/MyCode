import axios from './config'

export const getSwiperList =()=>{
    return axios.get('/swiperList')
}

export const getCridList =()=>{
    return axios.get('/cridList')
}

export const getProductList =()=>{
    return axios.get('/productList')
}