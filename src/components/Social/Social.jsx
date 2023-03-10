import React, { useContext } from 'react';
import SocialTabs from './SocialTabs';
import { GlobalContext } from '../../Context/GlobalContext';
import Discussions from './Discussions';

const Social = () => {
  const { details } = useContext(GlobalContext);
  return (
    <section className="panel media_panel social_panel tv_panel">
      <section className="review">
        <div className="menu">
          <h3>Social</h3>
          <SocialTabs />
        </div>
        <div className="content">
          <div className="original_content">
            <Discussions />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Social;
