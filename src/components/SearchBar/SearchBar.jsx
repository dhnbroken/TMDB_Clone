import { Close, Search, TrendingUp } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { getSearchMulti } from '../../API/search';
import { GlobalContext } from '../../Context/GlobalContext';
import useDebounce from '../../utils/useDebounce';

import './SearchBar.scss';

const SearchBar = ({ hide }) => {
  const [show, setShow] = useState(false);
  const { trending } = useContext(GlobalContext);

  const [searchResults, setSearchResults] = useState(trending);
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  const searchMovies = async (searchQuery) => {
    try {
      const res = await getSearchMulti(searchQuery);
      setSearchResults(res);
    } catch (err) {}
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchMovies(debouncedSearchTerm);
      } else {
        setSearchResults(trending);
      }
    },
    [debouncedSearchTerm], // Only call effect if debounced search term changes
  );

  return (
    <React.Fragment>
      <div className={`search_bar ${hide && 'hide'}`}>
        <section className="search show_search_false">
          <div className="sub_media">
            <form id="search_form" acceptCharset="utf-8">
              <label>
                <span>
                  <Search color="primary" />
                  <input
                    className="input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a movie, tv show, person..."
                    onFocus={() => setShow(true)}
                  />
                  <Close color="primary" />
                </span>
              </label>
            </form>
          </div>
        </section>
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
                    onClick={() => console.log(search.name || search.title)}
                  >
                    <Search />
                    {`${search.name || search.title} ${
                      search.original_name !== search.name ||
                      (search.original_title !== search.title
                        ? `(${search.original_name || search.original_title})`
                        : '')
                    }`}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
