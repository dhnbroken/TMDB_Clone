import moment from 'moment';
import React from 'react';

const MainContent = (props) => {
  const { film } = props;
  const base_url = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  return (
    <div className="movie_section">
      <div className="section">
        <div className="page_wrapper">
          {!!film.length &&
            film.map((film, index) => (
              <div className="card" key={index}>
                <div className="image">
                  <img src={base_url + film.poster_path} alt="" />
                </div>
                <div className="card-content">
                  <h2 style={{ fontWeight: 'bold' }}>{film.title}</h2>
                  <p>{moment(film.release_date).format('MMM D, YYYY')}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
