import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getTVDetails } from '../../API/tv';
import DetailsContent from '../../components/DetailsContent/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';

import './Details.scss';

const Details = () => {
  const { movieId } = useParams();
  const { state } = useLocation();
  const { trend } = state;
  const [tvDetail, setTvDetail] = useState([]);

  const getTVDetail = async (movieId) => {
    try {
      const res = await getTVDetails(movieId);
      setTvDetail(res);
    } catch (err) {}
  };

  useEffect(() => {
    getTVDetail(movieId);
  }, []);

  console.log(tvDetail);
  return (
    <React.Fragment>
      <section className="inner_content">
        <DetailsHeader tvDetail={tvDetail} />
        <DetailsContent />
      </section>
    </React.Fragment>
  );
};

export default Details;
