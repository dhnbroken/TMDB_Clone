import { axiosInstance } from './axiosInstance';

export const getTVPopular = async () => {
  try {
    const res = await axiosInstance.get('/tv/popular');
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTVDetails = async (tv_id) => {
  try {
    const res = await axiosInstance.get(`/tv/${tv_id}`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
export const getTVCredits = async (tv_id) => {
  try {
    const res = await axiosInstance.get(`/tv/${tv_id}/credits`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTVExternalId = async (tv_id) => {
  try {
    const res = await axiosInstance.get(`/tv/${tv_id}/external_ids`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTVKeywords = async (tv_id) => {
  try {
    const res = await axiosInstance.get(`/tv/${tv_id}/keywords`);
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTVRecommendations = async (tv_id) => {
  try {
    const res = await axiosInstance.get(`/tv/${tv_id}/recommendations`);
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};
