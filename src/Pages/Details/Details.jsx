import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieExternalId,
  getMovieKeywords,
  getMovieRecommendations,
} from '../../API/movies';
import { getTVCredits, getTVDetails, getTVExternalId, getTVKeywords, getTVRecommendations } from '../../API/tv';
import DetailsContent from '../../components/DetailsContent/DetailsContent';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import { GlobalContext } from '../../Context/GlobalContext';

import './Details.scss';

const Details = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { trend } = state;
  console.log(trend);

  const { setDetails, setCredits, setExternalId, setKeywords, setRecommend } = useContext(GlobalContext);
  const getTVInfo = async (id) => {
    try {
      const res = await getTVDetails(id);
      setDetails(res);
    } catch (err) {}
  };

  const getMovieInfo = async (id) => {
    try {
      const res = await getMovieDetails(id);
      setDetails(res);
    } catch (err) {}
  };

  const getTvCreditsInfo = async (id) => {
    try {
      const res = await getTVCredits(id);
      setCredits(res);
    } catch (err) {}
  };

  const getMovieCreditsInfo = async (id) => {
    try {
      const res = await getMovieCredits(id);
      setCredits(res);
    } catch (err) {}
  };

  const getTvExId = async (id) => {
    try {
      const res = await getTVExternalId(id);
      setExternalId(res);
    } catch (err) {}
  };

  const getTvKw = async (id) => {
    try {
      const res = await getTVKeywords(id);
      setKeywords(res);
    } catch (err) {}
  };

  const getTVRecommend = async (id) => {
    try {
      const res = await getTVRecommendations(id);
      setRecommend(res);
    } catch (err) {}
  };

  const getMovieExId = async (id) => {
    try {
      const res = await getMovieExternalId(id);
      setExternalId(res);
    } catch (err) {}
  };

  const getMovieKw = async (id) => {
    try {
      const res = await getMovieKeywords(id);
      setKeywords(res);
    } catch (err) {}
  };

  const getMovieRecommend = async (id) => {
    try {
      const res = await getMovieRecommendations(id);
      setRecommend(res);
    } catch (err) {}
  };

  useEffect(() => {
    if (trend.media_type === 'movie') {
      getMovieInfo(id);
      getMovieCreditsInfo(id);
      getMovieExId(id);
      getMovieKw(id);
      getMovieRecommend(id);
    } else if (trend.media_type === 'tv') {
      getTVInfo(id);
      getTvCreditsInfo(id);
      getTvExId(id);
      getTvKw(id);
      getTVRecommend(id);
    }
  }, [trend]);

  return (
    <React.Fragment>
      <section className="inner_content">
        <DetailsHeader trend={trend} />
        <DetailsContent />
      </section>
    </React.Fragment>
  );
};

export default Details;
