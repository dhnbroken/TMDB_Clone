import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import SearchBar from '/src/components/SearchBar/SearchBar';

import './Search.scss';
import ResultsList from '../../components/ResultsList/ResultsList';

const Search = () => {
  const { getTrending, setHideSearchBar, movieSearchResults, tvSearchResults, peopleSearchResults } =
    useContext(GlobalContext);

  useEffect(() => {
    setHideSearchBar(false);
    getTrending('all', 'day');
  }, []);

  const [active, setActive] = useState('Movies');
  return (
    <React.Fragment>
      <SearchBar />
      <section className="main_content search_results w-100">
        <div className="column_wrapper">
          <div className="content_wrapper">
            <div className="grey_column">
              <div className="settings_panel">
                <h3>Search Results</h3>
                <div className="search_menu_scroller">
                  <ul className="settings panel with_counts scroller w-100">
                    <li className={active === 'Movies' ? 'selected' : ''} onClick={() => setActive('Movies')}>
                      <p>Movies</p> <span>{movieSearchResults?.total_results || '0'}</span>
                    </li>
                    <li className={active === 'TV' ? 'selected' : ''} onClick={() => setActive('TV')}>
                      <p>TV Shows</p> <span>{tvSearchResults?.total_results || '0'}</span>
                    </li>
                    <li className={active === 'People' ? 'selected' : ''} onClick={() => setActive('People')}>
                      <p>People</p> <span>{peopleSearchResults?.total_results || '0'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ResultsList active={active} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Search;
