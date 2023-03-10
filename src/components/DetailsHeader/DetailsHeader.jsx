import moment from 'moment';
import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const DetailsHeader = ({ trend }) => {
  const { details } = useContext(GlobalContext);
  console.log(details);

  function getTimeFromMins(mins) {
    const duration = moment.duration(mins, 'minutes');
    const hh = duration.hours();
    const mm = duration.minutes();
    if (hh === 0) {
      return mm + 'm';
    }
    return hh + 'h ' + mm + 'm';
  }

  return (
    <div
      className="details_header"
      style={{
        backgroundImage: `url(${details && import.meta.env.VITE_DETAILS_HEADER_BACKGROUND_URL}${
          details.backdrop_path
        })`,
      }}
    >
      <div className="custom_bg">
        <div className="single_column">
          <section className="image_inner">
            <div className="poster_wrapper">
              <div className="poster">
                <div className="image_content">
                  <img
                    src={details.poster_path && `${import.meta.env.VITE_DETAILS_HEADER_URL}/${details.poster_path}`}
                    alt="poster"
                  />
                </div>
              </div>
            </div>
            <div className="header_poster_wrapper">
              <section className="header">
                <div className="title">
                  <h2>
                    {details?.name || details?.title}{' '}
                    <span>{`(${moment(details?.first_air_date || details?.release_date).format('YYYY')})`}</span>
                  </h2>
                  <div className="facts">
                    <span className="certification">TV-MA</span>
                    <span>{details?.genres?.map((tv) => tv?.name).join(', ')}</span>
                    <span className="runtime">
                      {trend.media_type === 'tv'
                        ? getTimeFromMins(details?.episode_run_time?.join())
                        : getTimeFromMins(details?.runtime)}
                    </span>
                  </div>
                </div>
                <div className="header_info">
                  <h3>Overview</h3>
                  <div className="overview">
                    <p>{details?.overview}</p>
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
