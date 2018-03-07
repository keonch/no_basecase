import React from 'react';
import UserNav from './right_nav/user_nav';
import Tabs from './left_nav/tabs';

const NavBar = (props) => {
  const loggedOut = !props.currentUser;
  return (
    <nav className='nav-bar'>
      <Tabs />
      <switch>
      </switch>
      <UserNav loggedOut={loggedOut} currentUser={ props } logout={props.logout} />
    </nav>
  );
};

export default NavBar;
