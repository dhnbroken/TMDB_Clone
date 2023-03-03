import React, { useContext, useEffect } from 'react';
import Filter from '/src/components/Filter/Filter';
import Loading from '/src/components/Loading/Loading';
import MainContent from '/src/components/MainContent/MainContent';
import Sort from '/src/components/Sort/Sort';
import { GlobalContext } from '/src/Context/GlobalContext';
import '../Movie/Movie.scss';

const TV = () => {
  const { loading, setLoading, tvPopular, getTV } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    getTV();
  }, []);

  console.log(loading);

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
                  <h2>Popular TV Shows</h2>
                </div>
                <div className="movie_content">
                  <div>
                    <Sort />
                    <Filter />
                  </div>
                  <div>
                    <MainContent film={tvPopular} />
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

export default TV;
