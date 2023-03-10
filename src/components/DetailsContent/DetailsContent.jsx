import React, { useContext } from 'react';

import './DetailsContent.scss';
import { GlobalContext } from '../../Context/GlobalContext';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const DetailsContent = () => {
  // const { details } = useContext(GlobalContext);
  return (
    <div className="details_media">
      <div className="column_wrapper">
        <div className="content_wrapper">
          <div>
            <LeftContent />
          </div>
          <div className="grey_column">
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
