import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showMessage } from './status';
import { useUserStore } from '../store/modules/user';
import { ElMessage } from 'element-plus';
const useStore = useUserStore();
const services: AxiosInstance = axios.create({
    //这是vue-cli引入方式
    // baseURL: process.env.VUE_APP_BASE_URL + "/api/v1/",
    //https://www.fastmock.site/mock/0b0717702f54cb0f743c3138d6ab6ed6/api

    //这是vite引入方式 import.meta.env.变量
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    headers: {
        Accept: 'application/json',
    },
});
// axios实例拦截请求
services.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // const token = useStore.token;
        // console.log(useStore.token);
        const token = localStorage.getItem('token');
        if (token) {
            //判断是否有headers
            console.log('能否获得token');

            if (config && config?.headers) {
                //为什么要加这个判断呢
                config.headers.authorization = `${token}`;
            }
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);
// axios实例拦截响应
services.interceptors.response.use(
    (response: AxiosResponse) => {
        // if (response.headers.authorization) {
        //     localStorage.setItem('token', response.headers.authorization);
        // } else {
        //     if (response.data && response.data.token) {
        //         localStorage.setItem('token', response.data.token);
        //     }
        // }
        if (response.status === 200) {
            console.log('拦截响应成功');
            console.log(response);

            return response;
        } else {
            //ElMessage.success(response.status)
            return response;
        }
    },
    (error: any) => {
        const { response } = error;
        console.log('错误响应测试' + error);

        if (response) {
            //返回错误状态码
            showMessage(response.status);
            return Promise.reject(response.data);
        } else {
            ElMessage.warning('网络异常，请稍后再试!');
        }
    },
);

export default services;
