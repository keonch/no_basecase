import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLogIn = () => {
  return (
    <div className='right-nav-btn'>
      <Link to='/login'><button className='login-btn'>Log In</button></Link>
      <Link to='/signup'><button className='signup-btn'>Sign Up</button></Link>
    </div>
  );
};

const UserNav = (props) => {
  const loggedIn = !!props.currentUser;
  return (
    <div className='right-nav'>
      {loggedIn && <button onClick={() => props.logout(props.currentUser)}>Logout</button>}
      {!loggedIn && <SignUpLogIn />}
    </div>
  );
};

export default UserNav;
