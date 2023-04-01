import axios, { AxiosResponse } from 'axios';

const { VITE_BASE_URL } = import.meta.env;

const axiosInstance = axios.create({
    baseURL: VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        /*        
            config.headers['Access-Control-Allow-Origin'] = '*';
            config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
            config.headers['authorization'] = `Bearer ${token}`;
        */
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const errorHandler = (error: any) => {
    const { message } = error;
    return Promise.reject({ message });
};

const successHandler = (response: AxiosResponse) => {
    return response;
};

axiosInstance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
);

export default axiosInstance;
