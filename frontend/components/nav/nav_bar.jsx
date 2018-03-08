import React from 'react';
import RightNavContainer from './right_nav/right_nav_container';
import LeftNav from './left_nav/left_nav';

const NavBar = (props) => {
  return (
    <div className='nav'>
      <LeftNav />
      <RightNavContainer />
    </div>
  );
};
export default NavBar;
