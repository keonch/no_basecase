import React from 'react';
import SigninLogin from './signin_login';

export default class UserNav extends React.Component {

  render () {
    return (
      <div>
        {this.props.loggedOut && <SigninLogin />}
      </div>
    );
  }
}
