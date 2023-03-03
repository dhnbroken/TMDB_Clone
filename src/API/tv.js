import { axiosInstance } from './axiosInstance';

export const getTVPopular = async () => {
  try {
    const res = await axiosInstance.get('/tv/popular');
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};
