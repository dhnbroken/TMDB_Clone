import React, { useEffect, useState } from 'react';
import { getPeople } from '../../API/people';
import './People.scss';
const People = () => {
  const base_url = 'https://www.themoviedb.org/t/p/w235_and_h235_face';
  const [peoplePopular, setPeoplePopular] = useState([]);
  const getPeoplePopular = async () => {
    try {
      const res = await getPeople();
      setPeoplePopular(res);
    } catch (e) {}
  };

  useEffect(() => {
    getPeoplePopular();
  }, []);

  return (
    <div className="inner_block">
      <div className="inner_content">
        <div className="content">
          <h2>Popular People</h2>
          <div className="results wrap">
            {peoplePopular.length &&
              peoplePopular.map((person, index) => (
                <div className="square" key={index}>
                  <div className="item profile card">
                    <div className="image_content">
                      <img src={base_url + person.profile_path} alt="" />
                    </div>
                    <div className="meta">
                      <p className="name">{person.name}</p>
                      <p className="sub">{person.known_for.map((p) => p.name || p.title).join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
