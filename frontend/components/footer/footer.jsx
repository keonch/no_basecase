import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-content'>
      <div className='footer-column col1'>
        <Link to='/' className='footer-links'>
          <img className='footer-icon' src={ window.logoLoggedIn } />
          <span className='footer-text'>No Basecase by Keon Choi</span>
        </Link>
        <a  className='footer-links' href='http://keonch.me/'>
          <img className='footer-icon' src={ window.portfolio } />
          <span className='footer-text'>Portfolio</span>
        </a>
        <a  className='footer-links' href='https://www.linkedin.com/in/keon-choi/'>
          <img className='footer-icon' src={ window.linkedin } />
          <span className='footer-text'>LinkedIn</span>
        </a>
        <a  className='footer-links' href='https://github.com/keonch'>
          <img className='footer-icon' src={ window.github } />
          <span className='footer-text'>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
