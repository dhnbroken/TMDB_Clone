import { axiosInstance } from './axiosInstance';

export const getTrendingList = async (media_type, time_window) => {
  try {
    const res = await axiosInstance.get(`/trending/${media_type}/${time_window}`);
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};
