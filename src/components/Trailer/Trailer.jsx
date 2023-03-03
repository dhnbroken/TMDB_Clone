import React from 'react';

import './Trailer.scss';
import TrailerCard from './TrailerCard';

const Trailer = () => {
  return (
    <section className="inner_content bg_image">
      <div className="column_wrapper">
        <div className="trailer scroller_wrap">
          <div className="content_wrapper">
            <div className="w-100">
              <div className="content_header">
                <h2>Lastest Trailer</h2>
              </div>
              <div className="content_main">
                <TrailerCard />
                <TrailerCard />
                <TrailerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
