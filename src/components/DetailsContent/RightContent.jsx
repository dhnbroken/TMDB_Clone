import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import Facts from '../Facts/Facts';

const RightContent = () => {
  const { keywords } = useContext(GlobalContext);
  return (
    <div className="w-100">
      <section className="split_column season">
        <div>
          <Facts />
          <section className="keywords right_column">
            <h4>Keywords</h4>
            <ul>
              {keywords &&
                keywords.map((kw, index) => (
                  <li key={index}>
                    <Link to={'/'}>{kw.name}</Link>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default RightContent;
