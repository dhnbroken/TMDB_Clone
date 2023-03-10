import { axiosInstance } from './axiosInstance';

export const getMoviesPopular = async () => {
  try {
    const res = await axiosInstance.get('/movie/popular');
    return res.data.results;
  } catch (err) {
    throw new String(Error(err));
  }
};

export const getMovieDetails = async (movie_id) => {
  try {
    const res = await axiosInstance.get(`/movie/${movie_id}`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getMovieCredits = async (movie_id) => {
  try {
    const res = await axiosInstance.get(`/movie/${movie_id}/credits`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getMovieExternalId = async (movie_id) => {
  try {
    const res = await axiosInstance.get(`/movie/${movie_id}/external_ids`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getMovieKeywords = async (movie_id) => {
  try {
    const res = await axiosInstance.get(`/movie/${movie_id}/keywords`);
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};

export const getMovieRecommendations = async (movie_id) => {
  try {
    const res = await axiosInstance.get(`/movie/${movie_id}/recommendations`);
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};
