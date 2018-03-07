import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLogIn = () => {
  return (
    <div>
      <Link to='/signup'><button>Sign Up</button></Link>
      <Link to='/login'><button>Login</button></Link>
    </div>
  );
};

const UserNav = (props) => {
  const loggedIn = !!props.currentUser;
  return (
    <div>
      <p>Right side nav bar placeholders</p>
      {loggedIn && <button onClick={() => props.logout(props.currentUser)}>Logout</button>}
      {!loggedIn && <SignUpLogIn />}
    </div>
  );
};

export default UserNav;
