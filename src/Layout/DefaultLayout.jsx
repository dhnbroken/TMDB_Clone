import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default DefaultLayout;
