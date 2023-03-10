import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
  params: { api_key: import.meta.env.VITE_API_KEY, language: 'en-US' },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  },
);
