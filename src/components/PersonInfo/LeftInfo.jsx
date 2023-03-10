import React, { useContext } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { GlobalContext } from '../../Context/GlobalContext';
import moment from 'moment/moment';

const LeftInfo = () => {
  const { person, personExId } = useContext(GlobalContext);

  return (
    <div className="grey_column">
      {person && (
        <React.Fragment>
          <section className="images inner">
            <div className="poster_wrapper profile">
              <div className="image_content">
                <img src={`${import.meta.env.VITE_DETAILS_HEADER_URL}${person.profile_path}`} alt="" />
              </div>
            </div>
          </section>
          <div className="column">
            <section className="full_wrapper facts left_column">
              <div className="social_links">
                <div>
                  <a
                    className="social_link"
                    title="Visit Instagram"
                    href={`https://instagram.com/${personExId.instagram_id}`}
                    target="_blank"
                    rel="noopener"
                    data-role="tooltip"
                  >
                    <InstagramIcon className="instagram" color="primary" />
                  </a>
                </div>
              </div>

              <h3>Personal Info</h3>
              <section>
                <p>
                  <strong>{person.known_for_department}</strong>
                  Acting
                </p>
                <p>
                  <strong>Known Credits</strong>
                  59
                </p>
                <p>
                  <strong>Gender</strong>
                  {person.gender === 2 ? 'Male' : 'Female'}
                </p>
                <p className="full">
                  <strong>Birthday</strong>
                  {person.birthday + ` (${moment().diff(moment(person.birthday, 'YYYY-MM-DD'), 'years')} years old)`}
                </p>
                <p className="full">
                  <strong>Place of Birth</strong>
                  {person.place_of_birth}
                </p>

                <p className="full true">
                  <strong>Also Known As</strong>
                </p>
                <ul>
                  {person.also_known_as &&
                    person.also_known_as.map((p, index) => (
                      <li key={index} itemProp="additionalName">
                        {p}
                      </li>
                    ))}
                </ul>
              </section>
            </section>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default LeftInfo;
