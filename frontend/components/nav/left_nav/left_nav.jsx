import React from 'react';

const LeftNav = () => {
  return (
    <div className='left-nav'>
      <div className='logo'></div>
      <button className='left-nav-btn'>Questions</button>
      <button className='left-nav-btn'>Developer Jobs</button>
      <button className='left-nav-btn'>Tags</button>
      <button className='left-nav-btn'>Users</button>
      <input type="text" placeholder="Search.." />
    </div>
  );
};

export default LeftNav;
