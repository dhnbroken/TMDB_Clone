import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 15000,
  params: { api_key: 'dce9c766a4ee375e740b9bd4fdc6e0df', language: 'en-US' },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  },
);
