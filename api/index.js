import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.56.1:8000/' });