import React from 'react';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';

const PersonInfo = () => {
  return (
    <React.Fragment>
      <LeftInfo />
      <div>
        <RightInfo />
      </div>
    </React.Fragment>
  );
};

export default PersonInfo;
