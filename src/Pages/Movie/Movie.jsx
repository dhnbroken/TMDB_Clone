import React, { useContext, useEffect } from 'react';
import Filter from '/src/components/Filter/Filter';
import Loading from '/src/components/Loading/Loading';
import MainContent from '/src/components/MainContent/MainContent';
import Sort from '/src/components/Sort/Sort';
import { GlobalContext } from '/src/Context/GlobalContext';
import './Movie.scss';

const Movie = () => {
  const { loading, setLoading, movies, getMovies } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="inner_content">
          <div className="movie_container">
            <div className="column_wrapper">
              <div className="content_wrapper wrap">
                <div className="title">
                  <h2>Popular Movies</h2>
                </div>
                <div className="movie_content">
                  <div>
                    <Sort />
                    <Filter />
                  </div>
                  <div>
                    <MainContent film={movies} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
