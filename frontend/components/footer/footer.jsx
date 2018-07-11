import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='footer-container'>
      <Link
        className='footer-logo'
        to='/'>
        <img src={window.logoSmall}/>
      </Link>

      <div className='footer-col'>
        <h2><Link to='/'>No Basecase</Link></h2>
        <Link className='footer-link' to='/questions'>Questions</Link>
      </div>

      <div className='footer-col'>
        <h2><a>Profile Links</a></h2>
        <a
          href='http://keonch.me/'
          target='_blank'
          className='footer-link'>
          Portfolio
        </a>
        <a
          href='https://github.com/keonch'
          target='_blank'
          className='footer-link'>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/keon-choi/'
          target='_blank'
          className='footer-link'>
          LinkedIn
        </a>
      </div>

      <div className='footer-col'>
        <h2><a>Contact</a></h2>
        <a
          href='mailto:keonch91@gmail.com'
          className='footer-link'>
          keonch91@gmail.com
        </a>
        <a
          className='footer-link'>
          646-520-7420
        </a>
      </div>
    </div>
  );
};

export default Footer;
