import moment from 'moment';
import React from 'react';

const MainContent = (props) => {
  const { film } = props;
  return (
    <div className="movie_section">
      <div className="section">
        <div className="page_wrapper">
          {!!film.length &&
            film.map((film, index) => (
              <div className="card" key={index}>
                <div className="image">
                  <img src={import.meta.env.VITE_POSTER_PATH_URL + film.poster_path} alt="" />
                </div>
                <div className="card-content">
                  <h2 style={{ fontWeight: 'bold' }}>{film.title}</h2>
                  <p>{moment(film.release_date || film.first_air_date).format('MMM D, YYYY')}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
