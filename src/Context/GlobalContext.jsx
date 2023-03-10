import React, { createContext, useReducer, useState } from 'react';
import { getMoviesPopular } from '../API/movies';
import { getSearchMovies, getSearchMulti, getSearchPeople, getSearchTv } from '../API/search';
import { getTrendingList } from '../API/trending';
import { getTVPopular } from '../API/tv';
import initialState from './initialState';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [tvPopular, setTVPopular] = useState([]);
  const [alignment, setAlignment] = React.useState('day');
  const [hideSearchBar, setHideSearchBar] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [tvSearchResults, setTvSearchResults] = useState([]);
  const [peopleSearchResults, setPeopleSearchResults] = useState([]);

  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const [externalId, setExternalId] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [recommend, setRecommend] = useState([]);

  const [person, setPerson] = useState([]);
  const [personTvCre, setPersonTvCre] = useState([]);
  const [personMovieCre, setPersonMovieCre] = useState([]);
  const [personExId, setPersonExId] = useState([]);

  const getTrending = async (type, alignment) => {
    try {
      const res = await getTrendingList(type, alignment);
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

  const searchMulti = async (searchQuery) => {
    try {
      const res = await getSearchMulti(searchQuery);
      setSearchResults(res);
    } catch (err) {}
  };

  const searchMovies = async (searchQuery) => {
    try {
      const res = await getSearchMovies(searchQuery);
      setMovieSearchResults(res);
    } catch (err) {}
  };

  const searchTvShows = async (searchQuery) => {
    try {
      const res = await getSearchTv(searchQuery);
      setTvSearchResults(res);
    } catch (err) {}
  };

  const searchPeople = async (searchQuery) => {
    try {
      const res = await getSearchPeople(searchQuery);
      setPeopleSearchResults(res);
    } catch (err) {}
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
        hideSearchBar,
        setHideSearchBar,
        searchMulti,
        searchResults,
        setSearchResults,
        searchMovies,
        searchTvShows,
        searchPeople,
        movieSearchResults,
        tvSearchResults,
        peopleSearchResults,
        details,
        setDetails,
        credits,
        setCredits,
        externalId,
        setExternalId,
        keywords,
        setKeywords,
        recommend,
        setRecommend,
        person,
        setPerson,
        personTvCre,
        setPersonTvCre,
        personMovieCre,
        setPersonMovieCre,
        personExId,
        setPersonExId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
