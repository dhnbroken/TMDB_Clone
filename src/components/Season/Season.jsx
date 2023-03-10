import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

const Season = () => {
  const { details } = useContext(GlobalContext);
  const { pathname } = useLocation();

  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    if (details.seasons) {
      setSeasons(details.seasons[details.seasons.length - 1]);
    }
  }, [details]);

  return (
    seasons && (
      <section className="panel season">
        <div className="group_dropdown">
          <h3>Last Season</h3>
        </div>
        <div className="season card">
          <div className="flex">
            <Link to={`${pathname}/season/4`} className="poster">
              <img
                src={seasons.poster_path && `${import.meta.env.VITE_SEASON_IMG_URL}/${seasons?.poster_path}`}
                alt=""
              />
            </Link>
            <div className="content">
              <div>
                <h2>{seasons?.name}</h2>
                <h4>{`${moment(seasons.air_date).format('YYYY')}|${seasons.episode_count} Episodes`}</h4>
                <div className="season_overview">
                  <p>{seasons.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Season;
