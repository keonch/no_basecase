import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

  renderSessionTabs() {
    if (this.props.currentUser) {
      return (
        <button onClick={this.props.logout}>Sign Out</button>
      );
    } else {
      return (
        <div>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderSessionTabs()}
      </div>
    );
  }
}
