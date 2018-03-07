import React from 'react';
import SigninLogin from './signin_login';

export default class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: props.loggedOut,
      currentUser: props.currentUser
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logout(this.state);
  }

  render (){
    return (
      <div>
        <p>Right side nav bar placeholders</p>
        {!this.state.loggedOut && <button onClick={this.logoutUser}>Logout</button>}
        {this.state.loggedOut && <SigninLogin />}
      </div>
    );
  }
}
