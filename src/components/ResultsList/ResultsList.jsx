import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

const ResultsList = ({ active }) => {
  const { movieSearchResults, tvSearchResults, peopleSearchResults } = useContext(GlobalContext);
  console.log(movieSearchResults.results);
  return (
    <div className="white_column reverse">
      {active === 'Movies' && !movieSearchResults?.results?.length && (
        <div>There are no movies that matched your query.</div>
      )}
      {active === 'TV' && !tvSearchResults?.results?.length && (
        <div>There are no TV Shows that matched your query.</div>
      )}
      {active === 'People' && !peopleSearchResults?.results?.length && (
        <div>There are no person that matched your query.</div>
      )}
      <section className="panel">
        <div className="search_results">
          <div className="results flex">
            {active === 'Movies'
              ? !!movieSearchResults.results &&
                movieSearchResults.results?.map((movie, index) => (
                  <div className="card v4 tight" key={index}>
                    <div className="wrapper">
                      <div className="image">
                        <div className="poster">
                          <Link to={`/movie/${movie.id}`} state={{ trend: { media_type: 'movie', ...movie } }}>
                            <img src={import.meta.env.VITE_SEARCH_RESULT_IMG_URL + movie.poster_path} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <div className="wrapper">
                          <div className="title">
                            <div>
                              <h2>{movie.title || movie.name}</h2>
                            </div>
                            <span className="release_date">April 22, 2005</span>
                          </div>
                        </div>
                        <div className="overview">
                          <p>{movie.overview}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : active === 'TV'
              ? !!tvSearchResults.results &&
                tvSearchResults.results?.map((tv, index) => (
                  <div className="card v4 tight" key={index}>
                    <div className="wrapper">
                      <div className="image">
                        <div className="poster">
                          <Link to={`/tv/${tv.id}`} state={{ trend: { media_type: 'tv', ...tv } }}>
                            <img src={import.meta.env.VITE_SEARCH_RESULT_IMG_URL + tv.poster_path} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <div className="wrapper">
                          <div className="title">
                            <div>
                              <h2>{tv.title || tv.name}</h2>
                            </div>
                            <span className="release_date">April 22, 2005</span>
                          </div>
                        </div>
                        <div className="overview">
                          <p>{tv.overview}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : active === 'People' &&
                !!peopleSearchResults.results &&
                peopleSearchResults.results?.map((person, index) => (
                  <div className="card v4 tight" key={index}>
                    <div className="wrapper">
                      <div className="image">
                        <div className="poster">
                          <img
                            src={
                              person.profile_path !== null
                                ? import.meta.env.VITE_SEARCH_RESULT_IMG_URL + person.profile_path
                                : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                            }
                            alt=""
                            width={94}
                            height={141}
                          />
                        </div>
                      </div>
                      <div className="details">
                        <div className="wrapper">
                          <div className="title">
                            <div>
                              <h2>{person.name}</h2>
                            </div>
                            <span className="release_date">April 22, 2005</span>
                          </div>
                        </div>
                        <div className="overview">
                          <p>{`${person.known_for_department} • ${person?.known_for
                            ?.map((p) => p.name || p.title)
                            .join(', ')}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsList;
