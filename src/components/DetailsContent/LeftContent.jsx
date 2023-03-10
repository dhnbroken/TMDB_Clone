import React from 'react';
import { useLocation } from 'react-router-dom';

import TopCast from '../TopCast/TopCast';
import Season from '../Season/Season';
import Social from '../Social/Social';
import Recommend from '../Recommend/Recommend';

const LeftContent = () => {
  const { state } = useLocation();
  const { trend } = state;

  return (
    <div className="white_column">
      <TopCast />
      {trend.media_type === 'tv' && <Season />}
      <Social />
      <Recommend trend={trend} />
    </div>
  );
};

export default LeftContent;
