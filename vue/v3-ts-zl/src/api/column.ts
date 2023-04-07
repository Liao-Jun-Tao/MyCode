import { axios } from './http'

export const getColumn = () => {
    return axios.get('/api/columns?currentPage=1&pageSize=3')
}