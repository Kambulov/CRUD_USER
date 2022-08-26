import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const token = localStorage.getItem('token');

export const axiosRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
});

axiosRequest.interceptors.request.use((config:AxiosRequestConfig) => {
    if(config.headers)  config.headers['Authorization'] = 'Bearer ' + token;
    return config;
});

axiosRequest.interceptors.response.use(
    (response:AxiosResponse) => {
        return response;
    },
    (error:AxiosError) => {
        return Promise.reject(error)
    }
);