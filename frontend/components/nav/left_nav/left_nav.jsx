import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className='left-nav'>
      <Link to='/' className='logo'></Link>
      <NavLink to='/questions' className='left-nav-link' activeClassName="left-nav-link-active">Questions</NavLink>
    </div>
  );
};

export default LeftNav;
