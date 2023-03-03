import React from 'react';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import Popular from '../../components/Popular/Popular';
import Trailer from '../../components/Trailer/Trailer';
import Trending from '../../components/Trending/Trending';

import './Home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Trending />
      <Trailer />
      <Popular />
    </React.Fragment>
  );
};

export default Home;
