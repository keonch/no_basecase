import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-content'>
      <Link to='/' className='footer-logo'>
        <img className='footer-icon logo' src={ window.logoLoggedIn } />
      </Link>

      <div className='footer-column col1'>
        <Link to='/' className='footer-links maincat'>No Basecase</Link>
        <Link to='/questions' className='footer-links subcat'>Questions</Link>
        <Link to='/jobs' className='footer-links subcat'>Developer Jobs</Link>
        <Link to='/tags' className='footer-links subcat'>Tags</Link>
        <Link to='/users' className='footer-links subcat'>Users</Link>
      </div>

      <div className='footer-column col2'>
        <div className='maincat'>Profile Links</div>
        <a  className='footer-links subcat' href='http://keonch.me/'>
          <img className='footer-icon' src={ window.portfolio } />
          Portfolio
        </a>
        <a  className='footer-links subcat' href='https://www.linkedin.com/in/keon-choi/'>
          <img className='footer-icon' src={ window.linkedin } />
          LinkedIn
        </a>
        <a  className='footer-links subcat' href='https://github.com/keonch'>
          <img className='footer-icon' src={ window.github } />
          GitHub
        </a>
        <a  className='footer-links subcat' href={ window.resume }>
          <img className='footer-icon' src={ window.folder } />
          Resume
        </a>
      </div>

      <div className='footer-column col3'>
        <div className='maincat'>Contact</div>
        <a href='mailto:keonch91@gmail.com' className='footer-links subcat'>keonch91@gmail.com</a>
        <div className='subcat'>646-520-7420</div>
      </div>
    </div>
  );
};

export default Footer;
