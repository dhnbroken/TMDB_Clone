import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleDetails, getPeopleTvCre, getPeopleMovieCre, getPeopleExId } from '../../API/people';
import PersonInfo from '../../components/PersonInfo/PersonInfo';
import { GlobalContext } from '../../Context/GlobalContext';

import './PersonDetails.scss';
const PersonDetails = () => {
  const { id } = useParams();
  const { setPerson, setPersonTvCre, setPersonMovieCre, setPersonExId } = useContext(GlobalContext);

  const getDetail = async (id) => {
    try {
      const res = await getPeopleDetails(id);
      setPerson(res);
    } catch (err) {}
  };

  const getTvCre = async (id) => {
    try {
      const res = await getPeopleTvCre(id);
      setPersonTvCre(res);
    } catch (err) {}
  };

  const getMovieCre = async (id) => {
    try {
      const res = await getPeopleMovieCre(id);
      setPersonMovieCre(res);
    } catch (err) {}
  };

  const getExId = async (id) => {
    try {
      const res = await getPeopleExId(id);
      setPersonExId(res);
    } catch (err) {}
  };

  useEffect(() => {
    getDetail(id);
    getTvCre(id);
    getMovieCre(id);
    getExId(id);
  }, []);

  return (
    <div className="media person_v4 header_medium">
      <div className="column_wrapper no_pad">
        <div className="content_wrapper">
          <PersonInfo />
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
