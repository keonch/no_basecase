import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search_form_container';

const Nav = (props) => {
  return (
    <div className='nav-container'>
      <Link to='/' className='logo'>
        <img className='logo-img' src='/assets/logo.png' />
      </Link>

      <SearchForm />

      {
        props.currentUser ? (
          <div className='session-btn'>
            <button
              className='logout'
              onClick={props.logout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className='session-btn'>
            <Link className='login' to='/login'>Log In</Link>
            <Link className='signup' to='/signup'>Sign Up</Link>
          </div>
        )
      }
    </div>
  );
};

export default Nav;
