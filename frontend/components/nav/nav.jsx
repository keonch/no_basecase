import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = (props) => {

  const loggedIn = !!props.currentUser;

  return (
    <div className='nav'>
      <div className='links'>
        <Link to='/' className='logo'></Link>

        <NavLink to='/questions' className='navlink' >Questions</NavLink>
        <NavLink to='/jobs' className='navlink' >Developer Jobs</NavLink>
        <NavLink to='/tags' className='navlink' >Tags</NavLink>
        <NavLink to='/users' className='navlink' >Users</NavLink>

        <div className='search-bar'>
          <input className='search' type='text' placeholder='Search...'></input>
        </div>
      </div>

      <div className='user-items'>
        <div className='menu-items'>
          <i class="fas fa-inbox"></i>
          <i class="fas fa-trophy"></i>
          <i class="fas fa-question-circle"></i>
          <i class="fab fa-stack-exchange"></i>
        </div>

        <div className='session'>
          {
            loggedIn ?
            <button onClick={() => props.logout(props.currentUser)}>Logout</button>
            :
            <div className='session-btn'>
              <Link to='/login'><button className='login'>Log In</button></Link>
              <Link to='/signup'><button className='signup'>Sign Up</button></Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
