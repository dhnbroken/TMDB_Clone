import React from 'react';

const TrailerCard = () => {
  return (
    <div className="video_card">
      <div className="image">
        <div className="wrapper">
          <img src={`${import.meta.env.VITE_TRAILER_IMG_URL}/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg`} alt="" />
          <div className="play">
            <span className="play_icon"></span>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>The Last of Us</h2>
        <h3>Episode 8 Preview</h3>
      </div>
    </div>
  );
};

export default TrailerCard;
