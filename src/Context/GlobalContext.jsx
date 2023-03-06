import React, { createContext, useReducer, useState } from 'react';
import { getMoviesPopular } from '../API/movies';
import { getTrendingList } from '../API/trending';
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
  trending: [],
  setTrending: () => {},
  getTrending: () => {},
  alignment: 'day',
  setAlignment: () => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [tvPopular, setTVPopular] = useState([]);
  const [alignment, setAlignment] = React.useState('day');

  const getTrending = async () => {
    try {
      const res = await getTrendingList('all', alignment);
      setTrending(res);
    } catch (err) {}
  };

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
        trending,
        setTrending,
        getTrending,
        alignment,
        setAlignment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
