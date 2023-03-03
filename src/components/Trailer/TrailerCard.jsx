import React from 'react';

const TrailerCard = () => {
  return (
    <div className="video_card">
      <div className="image">
        <div className="wrapper">
          <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" alt="" />
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
