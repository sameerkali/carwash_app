import axios from 'axios';
import { storage } from '../services/storage';
import { STORAGE_KEYS } from '../constants';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = storage.getString(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    }
    return Promise.reject(error);
  },
);

export default api;
