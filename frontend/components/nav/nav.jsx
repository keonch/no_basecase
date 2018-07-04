import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search_form_container';

const Nav = (props) => {
  const sessionTabs = props.currentUser ? (
    <button onClick={props.logout}>Sign Out</button>
  ) : (
    <div>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );

  return (
    <div className='nav'>
      <Link to='/'><img className='logo' src={}/></Link>

      <SearchForm />

      {sessionTabs}
    </div>
  );
};

export default Nav;
