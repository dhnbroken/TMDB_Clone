import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import SocialLink from './SocialLink';

const Facts = () => {
  const { details } = useContext(GlobalContext);

  return (
    <div className="column no_bottom_pad">
      <section className="facts left-column">
        <SocialLink />
        <h4>Facts</h4>
        <p className="wrap">
          <strong>Original Name</strong>
          {details.original_name}
        </p>
        <p>
          <strong>Status</strong>
          {details.status}
        </p>
        <p className="no_bottom_pad">
          <strong>Networks</strong>
        </p>
        <ul className="networks">
          {!!details?.networks &&
            details?.networks.map((nw, index) => (
              <li key={index}>
                <img src={`${import.meta.env.VITE_NETWORK_IMG_URL}${nw.logo_path}`} alt="" />
              </li>
            ))}
        </ul>
        <p>
          <strong>Type</strong>
          {details.type}
        </p>
        <p>
          <strong>Original Language</strong>
          {details.original_language === 'ja' && 'Japanese'}
        </p>
      </section>
    </div>
  );
};

export default Facts;
