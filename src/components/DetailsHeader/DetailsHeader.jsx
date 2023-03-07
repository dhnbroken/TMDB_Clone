import React from 'react';

const DetailsHeader = ({ tvDetail }) => {
  const base_url = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
  return (
    <div className="details_header">
      <div className="custom_bg">
        <div className="single_column">
          <section className="image_inner">
            <div className="poster_wrapper">
              <div className="poster">
                <div className="image_content">
                  <img src={base_url + tvDetail.poster_path} alt="" />
                </div>
              </div>
            </div>
            <div className="header_poster_wrapper">
              <section className="header">
                <div className="title">
                  <h2>{tvDetail.name}</h2>
                  <div className="facts">
                    <span className="certification">TV-MA</span>
                    <span>{tvDetail.genres.map((tv) => tv.name).join(', ')}</span>
                    <span className="runtime">{` ${tvDetail.episode_run_time}m`}</span>
                  </div>
                </div>
                <div className="header_info">
                  <h3>Overview</h3>
                  <div className="overview">
                    <p>{tvDetail.overview}</p>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
