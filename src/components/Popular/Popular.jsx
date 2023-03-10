import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

import './Popular.scss';

const Popular = () => {
  const { getTV, tvPopular } = useContext(GlobalContext);

  useEffect(() => {
    getTV();
  }, []);

  return (
    <section className="inner_content no_pad">
      <div className="column_wrapper">
        <div className="content_wrapper no_bottom_pad wrap">
          <div className="w-100">
            <div className="content_header">
              <h2>What's Popular</h2>
            </div>
            <div className="content_main should_fade is_fading">
              <div className="content">
                {!!tvPopular.length &&
                  tvPopular.map((tv, index) => (
                    <div className="card" key={index}>
                      <div className="image">
                        <img src={import.meta.env.VITE_POSTER_PATH_URL + tv.poster_path} alt="" />
                      </div>
                      <div className="card-content">
                        <h2>{tv.name}</h2>
                        <p>{moment(tv.first_air_date).format('MMM D, YYYY')}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
