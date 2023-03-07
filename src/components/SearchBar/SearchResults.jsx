import { Search, TrendingUp } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import useDebounce from '../../utils/useDebounce';

const SearchResults = ({ searchQuery, show, setShow }) => {
  const navigate = useNavigate();
  const { trending, searchMulti, setSearchResults, searchResults, searchMovies, searchPeople, searchTvShows } =
    useContext(GlobalContext);
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  useEffect(() => {
    setSearchResults(trending);
  }, [trending]);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchMulti(debouncedSearchTerm);
      } else {
        setSearchResults(trending);
      }
    },
    [debouncedSearchTerm], // Only call effect if debounced search term changes
  );
  const handleSelectSuggest = (query) => {
    navigate({ pathname: '/search', search: createSearchParams({ q: query }).toString() });
    searchMovies(query);
    searchPeople(query);
    searchTvShows(query);
    setShow(false);
  };
  return (
    <div className={`suggest-container ${!show ? 'hide' : 'block'}`}>
      <div className="w-100 bg-trending">
        <div className="wrapper">
          <h2>
            <TrendingUp />
            Trending
          </h2>
        </div>
      </div>
      <div>
        <ul className="w-100">
          {!!searchResults.length &&
            searchResults.slice(0, 10).map((search, index) => (
              <li
                className="wrapper cursor-pointer"
                key={index}
                onClick={(e) => handleSelectSuggest(e.currentTarget.innerText)}
              >
                <Search />
                {`${search.name || search.title} 
                ${
                  search.original_name !== search.name || search.original_title !== search.title
                    ? `(${search.original_name || search.original_title})`
                    : ''
                }
                `}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
