import React from 'react';
import UserNav from './user_nav';
import Tabs from './tabs_nav';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  render () {
    const loggedOut = !this.state;
    return (
      <nav className='nav-bar'>
        <Tabs />
        <UserNav loggedOut={loggedOut} />
      </nav>
    );
  }
}
