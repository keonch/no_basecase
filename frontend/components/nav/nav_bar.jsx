import React from 'react';
import RightNavContainer from './right_nav/right_nav_container';
import LeftNav from './left_nav/left_nav';

const NavBar = (props) => {
  return (
    <nav className='nav-bar'>
      <LeftNav />
      <RightNavContainer />
    </nav>
  );
};

// loggedOut={ loggedOut } currentUser={ props } logout={ props.logout }
export default NavBar;
