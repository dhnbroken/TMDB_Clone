import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { getTrendingList } from '../../API/trending';

import './Trending.scss';
const Trending = () => {
  const baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
  const [alignment, setAlignment] = React.useState('day');
  const [trending, setTrending] = useState([]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const getTrending = async () => {
    try {
      const res = await getTrendingList('all', alignment);
      setTrending(res);
    } catch (err) {}
  };

  useEffect(() => {
    getTrending();
  }, [alignment]);

  return (
    <section className="inner_content trending">
      <div className="column_wrapper">
        <div className="content_wrapper wrap">
          <div className="w-100">
            <div className="content_header">
              <h2>Trending</h2>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton sx={{ textTransform: 'none' }} value="day">
                  <p>Today</p>
                </ToggleButton>
                <ToggleButton sx={{ textTransform: 'none' }} value="week">
                  Week
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className="content_main should_fade is_fading">
            <div className="content">
              {trending.length &&
                trending.map((trend, index) => (
                  <div className="card" key={index}>
                    <div className="image">
                      <img src={baseURL + trend.poster_path} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>{trend.title || trend.name}</h2>
                      <p>{moment(trend.release_date).format('MMM D, YYYY')}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
