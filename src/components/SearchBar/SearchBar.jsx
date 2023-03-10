import { Close, Search } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import './SearchBar.scss';
import SearchResults from './SearchResults';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { GlobalContext } from '../../Context/GlobalContext';
import { createSearchParams, useNavigate } from 'react-router-dom';

const SearchBar = ({ hideSearchBar }) => {
  const navigate = useNavigate();
  const { searchMovies, searchPeople, searchTvShows } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);
  const hideSearchResults = () => {
    setShow(false);
  };

  const searchRef = useDetectClickOutside({ onTriggered: hideSearchResults });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      searchMovies(searchQuery);
      searchPeople(searchQuery);
      searchTvShows(searchQuery);
      setShow(false);
      setSearchQuery('');
      navigate({ pathname: '/search', search: createSearchParams({ q: searchQuery }).toString() });
    }
  };

  return (
    <React.Fragment>
      <div className={`search_bar ${hideSearchBar ? 'hide' : ''}`} ref={searchRef}>
        <section className="search show_search_false">
          <div className="sub_media">
            <form id="search_form" acceptCharset="utf-8" onSubmit={handleSubmit}>
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
                  <Close color="primary" onClick={() => setSearchQuery('')} />
                </span>
              </label>
            </form>
          </div>
        </section>
        <SearchResults searchQuery={searchQuery} setSearchQuery={setSearchQuery} show={show} setShow={setShow} />
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
