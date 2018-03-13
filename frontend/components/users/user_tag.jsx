import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class UserTag extends React.Component {

  render() {
    return (
      <div className={`user-tag`}>
        <div className='user-tag-time'>
          { this.props.contentType === 'question' ? "asked " : "answered " }
          <Moment fromNow>{this.props.time}</Moment>
        </div>

        <div className='user-tag-profile'>
          <Link to={`/users/${this.props.author.id}`}>
            <img className='user-tag-img' src={window.profile} />
          </Link>

          <div className='user-tag-info'>
            <Link
              className='user-tag-author' to={`/users/${this.props.author.id}`} >
              { this.props.author.name }
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTag;
