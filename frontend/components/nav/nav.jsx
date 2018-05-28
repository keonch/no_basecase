import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchContainer from './search_container';

export default class Nav extends React.Component {
  render() {
    const loggedIn = !!this.props.currentUser;
    // <div className='menu-items'>
    //   <i className="fas fa-inbox"></i>
    //   <i className="fas fa-trophy"></i>
    //   <i className="fas fa-question-circle"></i>
    //   <i className="fab fa-stack-exchange"></i>
    // </div>
    return (
      <div className='nav'>
        {
          loggedIn ?
          <Link to='/' >
          <img className='logoLoggedIn' src={ window.logoLoggedIn } />
        </Link>
        :
        <Link to='/' >
        <img className='logo' src={ window.logo } />
      </Link>
    }

    <div className='links'>
      <NavLink to='/questions' className='navlink' >Questions</NavLink>

      <div className='search-bar'>
        <SearchContainer />
      </div>
    </div>

    <div className='user-items'>
      <div>
        {
          loggedIn ?
          <Link to={`/users/${this.props.currentUser.id}`}>
          <img className='user-nav-img' src={window.profile} />
        </Link>
        :
        ''
      }

    </div>



    <div className='session'>
      {
        loggedIn ?
        <button className='logout' onClick={() => this.props.logout(this.props.currentUser)}>Logout</button>
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
  }
};
