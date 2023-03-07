import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { GlobalContext } from '../Context/GlobalContext';

const DefaultLayout = ({ children }) => {
  const { hideSearchBar } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <Navbar />
      <main className={!hideSearchBar ? 'mt-search-bar' : ''}>{children}</main>
    </React.Fragment>
  );
};

export default DefaultLayout;
