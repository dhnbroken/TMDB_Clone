import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

const TopCast = () => {
  const { credits } = useContext(GlobalContext);
  const { state } = useLocation();
  return (
    <section className="panel top_billed">
      <h3>{state.trend.media_type === 'tv' ? 'Series Cast' : 'Top Billed Cast'}</h3>
      <div className="scroller_wrap should_fade is_fading">
        <ol className="people scroller">
          {credits.cast &&
            credits.cast.slice(0, 9).map((cast, index) => (
              <li className="card" key={index}>
                <Link to="#">
                  <img src={`${import.meta.env.VITE_CAST_IMG_URL}${cast.profile_path}`} alt="" />
                </Link>
                <p>
                  <Link to="#">{cast.name}</Link>
                </p>
                <p className="character">{cast.character}</p>
                <p className="episode_count">87 Episodes</p>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
};

export default TopCast;
