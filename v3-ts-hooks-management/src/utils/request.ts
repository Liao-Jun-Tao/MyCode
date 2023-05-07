import axios, {AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';

// 创建一个 Axios 实例
const service:AxiosInstance = axios.create({
    timeout: 5000
});

// 添加请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    // 请求错误时的处理
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做处理
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject();
        }
    },
    // 响应错误时的处理
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

// 导出 Axios 实例
export default service;

