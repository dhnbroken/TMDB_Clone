import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPeople } from '../../API/people';
import './People.scss';
const People = () => {
  const [peoplePopular, setPeoplePopular] = useState([]);
  console.log(peoplePopular);
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
            {!!peoplePopular.length &&
              peoplePopular.map((person, index) => (
                <div className="square" key={index}>
                  <div className="item profile card">
                    <div className="image_content">
                      <Link to={`/people/${person.id}`}>
                        <img src={import.meta.env.VITE_PEOPLE_AVATAR_IMG_URL + person.profile_path} alt="" />
                      </Link>
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
