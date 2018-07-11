import React from 'react';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <a
        href='https://github.com/keonch'
        target='_blank'
        className='github-ad'>
        <img src={window.githubAd}/>
      </a>
      <a
        href='https://www.linkedin.com/feed/'
        target='_blank'
        className='linkedin-ad'>
        <img src={window.linkedinAd}/>
      </a>
    </div>
  )
}

export default Sidebar;
