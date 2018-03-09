import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className='left-nav'>
      <Link to='/' className='logo'></Link>
      <button className='left-nav-btn'>Questions</button>
      <button className='left-nav-btn'>Developer Jobs</button>
      <button className='left-nav-btn'>Tags</button>
      <button className='left-nav-btn'>Users</button>
      <input type="text" placeholder="Search.." />
    </div>
  );
};

export default LeftNav;
