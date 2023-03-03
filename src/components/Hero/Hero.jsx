import React, { useEffect, useState } from 'react';
import { getGenres } from '../../API/genres';

import './Hero.scss';
const Hero = () => {
  const [query, setQuery] = useState('');

  return (
    <section className="inner_content hero">
      <div className="hero_container">
        <div className="column_wrapper">
          <div className="content_wrapper wrap">
            <div className="title">
              <h2>Welcome</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <div className="search">
              <form className="search-form" acceptCharset="utf-8">
                <label>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search for a movie, tv show, person......"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>
                <input type="submit" value="Search" className="search-submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
