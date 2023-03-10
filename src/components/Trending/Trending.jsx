import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTrendingList } from '../../API/trending';
import { GlobalContext } from '../../Context/GlobalContext';

import './Trending.scss';
const Trending = () => {
  const navigate = useNavigate();
  const { trending, getTrending, setAlignment, alignment } = useContext(GlobalContext);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    getTrending('all', alignment);
  }, [alignment]);

  const handleNavigateToDetails = (trend) => {
    switch (trend.media_type) {
      case 'tv':
        navigate(`/tv/${trend.id}`, { state: { trend: trend } });
        break;
      case 'movie':
        navigate(`/movie/${trend.id}`, { state: { trend: trend } });
      default:
        break;
    }
  };
  return (
    <section className="inner_content trending no_pad">
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
              {!!trending.length &&
                trending.map((trend, index) => (
                  <div className="card cursor-pointer" key={index} onClick={() => handleNavigateToDetails(trend)}>
                    <div className="image">
                      <img src={import.meta.env.VITE_POSTER_PATH_URL + trend.poster_path} alt="" />
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
