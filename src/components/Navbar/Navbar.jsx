import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { Add, Notifications, Search } from '@mui/icons-material/';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Grid container spacing={2} sx={{ margin: 'auto', alignItems: 'center' }}>
        <Grid item xs={8} sx={{ paddingTop: '0px !important' }}>
          <div className="nav-item">
            <Link to={'/'}>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
                width="154"
                height="20"
              />
            </Link>
            <h4>
              <Link to={'/movie'}>Movie</Link>
            </h4>
            <h4>
              <Link to={'/tv'}>TV Shows</Link>
            </h4>
            <h4>
              <Link to={'/people'}>People</Link>
            </h4>
            <h4>More</h4>
          </div>
        </Grid>
        <Grid item xs={4} sx={{ paddingTop: '0px !important' }}>
          <div className="nav-item">
            <Add sx={{ fontWeight: 'bold' }} />
            <div className="language">En</div>
            <Notifications />
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ lineHeight: 1.6 }} />
            <Search color="primary" />
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Navbar;
