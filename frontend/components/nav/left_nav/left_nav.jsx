import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className='left-nav'>
      <Link to='/' className='logo'></Link>
      <Link to='/questions' className='left-n-btn'>Questions</Link>
    </div>
  );
};

export default LeftNav;
