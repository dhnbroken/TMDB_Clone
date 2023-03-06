import { axiosInstance } from './axiosInstance';

export const getSearchMulti = async (q) => {
  try {
    const res = await axiosInstance.get('/search/multi', { params: { query: q } });
    return res.data.results;
  } catch (err) {
    throw new String(Error(err));
  }
};
