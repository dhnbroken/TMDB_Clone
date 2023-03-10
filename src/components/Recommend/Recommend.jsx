import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

const Recommend = ({ trend }) => {
  const { recommend } = useContext(GlobalContext);
  return (
    <section className="panel recommendations scroller">
      <div>
        <h3>Recommendations</h3>
        <div className="scroller_wrap should_fade is_fading">
          <div className="scroller">
            {recommend &&
              recommend.map((rec, index) => (
                <div className="item mini backdrop mini_card" key={index}>
                  <div className="image_content">
                    <img src={`${import.meta.env.VITE_RECOMMEND_IMG_URL}${rec?.backdrop_path}`} alt="" />
                  </div>
                  <p className="tv flex">
                    <Link
                      className="title"
                      to={trend.media_type === 'movie' ? `/movie/${rec.id}` : `/tv/${rec.id}`}
                      state={{ trend: rec }}
                    >
                      {rec?.name || rec.title}
                    </Link>
                    <span className="vote_average">{`${Math.round(rec.vote_average * 10)}%`}</span>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
