import { axiosInstance } from './axiosInstance';

export const getPeople = async () => {
  try {
    const res = await axiosInstance.get('/person/popular');
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};
