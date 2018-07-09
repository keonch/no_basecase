import React from 'react';
import Moment from 'react-moment';

const Author = (props) => {
  return (
    <div className={`author-${props.styleClass} ${props.highlight}`}>
      <div className='author-time'>
        {props.verb} <Moment fromNow>{props.createdAt}</Moment>
      </div>
      <div className='author-info'>
        {
          props.styleClass !== 'single-line' &&
          <img className='avatar' src='/assets/avatar.png' />
        }
        <div className='username'>{props.author.name}</div>
      </div>
    </div>
  );
};

export default Author;
