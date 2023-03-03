import React, { createContext, useReducer, useState } from 'react';
import { getMoviesPopular } from '../API/movies';
import { getTVPopular } from '../API/tv';

const initialState = {
  movies: [],
  setMovies: () => {},
  getMovies: () => {},
  loading: true,
  setLoading: () => {},
  tvPopular: [],
  setTVPopular: () => {},
  getTV: () => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [tvPopular, setTVPopular] = useState([]);

  const getMovies = async () => {
    try {
      const res = await getMoviesPopular();
      setMovies(res);
      setLoading(false);
    } catch (err) {}
  };

  const getTV = async () => {
    try {
      const res = await getTVPopular();
      setTVPopular(res);
      setLoading(false);
    } catch (e) {}
  };

  return (
    <GlobalContext.Provider
      value={{
        movies,
        setMovies,
        getMovies,
        loading,
        setLoading,
        tvPopular,
        setTVPopular,
        getTV,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
