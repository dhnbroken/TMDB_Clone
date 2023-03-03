import { axiosInstance } from './axiosInstance';

export const getMoviesPopular = async () => {
  try {
    const res = await axiosInstance.get('/movie/popular');
    return res.data.results;
  } catch (err) {
    throw new String(Error(err));
  }
};
