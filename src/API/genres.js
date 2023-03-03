import { axiosInstance } from './axiosInstance';

export const getGenres = async () => {
  try {
    const res = await axiosInstance.get('/genre/movie/list');
    return res.data.genres;
  } catch (err) {
    throw new Error(err);
  }
};
