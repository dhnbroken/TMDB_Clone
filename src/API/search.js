import { axiosInstance } from './axiosInstance';

export const getSearchMulti = async (q) => {
  try {
    const res = await axiosInstance.get('/search/multi', { params: { query: q } });
    return res.data.results;
  } catch (err) {
    throw new String(Error(err));
  }
};

export const getSearchTv = async (q) => {
  try {
    const res = await axiosInstance.get('/search/tv', { params: { query: q } });
    return res.data;
  } catch (err) {
    throw new String(Error(err));
  }
};

export const getSearchMovies = async (q) => {
  try {
    const res = await axiosInstance.get('/search/movie', { params: { query: q } });
    return res.data;
  } catch (err) {
    throw new String(Error(err));
  }
};

export const getSearchPeople = async (q) => {
  try {
    const res = await axiosInstance.get('/search/person', { params: { query: q } });
    return res.data;
  } catch (err) {
    throw new String(Error(err));
  }
};
