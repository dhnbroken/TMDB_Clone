import { axiosInstance } from './axiosInstance';

export const getPeople = async () => {
  try {
    const res = await axiosInstance.get('/person/popular');
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPeopleDetails = async (person_id) => {
  try {
    const res = await axiosInstance.get(`/person/${person_id}`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPeopleTvCre = async (person_id) => {
  try {
    const res = await axiosInstance.get(`/person/${person_id}/tv_credits`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPeopleMovieCre = async (person_id) => {
  try {
    const res = await axiosInstance.get(`/person/${person_id}/movie_credits`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPeopleExId = async (person_id) => {
  try {
    const res = await axiosInstance.get(`/person/${person_id}/external_ids`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
