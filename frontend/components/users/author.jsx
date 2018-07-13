import React from 'react';
import Moment from 'react-moment';

const Author = (props) => {
  return (
    <div className={`author${!props.showAvatar ? '-single-line' : ''} ${props.highlight || ''}`}>
      <div className='author-time'>
        {props.verb} <Moment fromNow>{props.createdAt}</Moment>
      </div>
      <div className='author-info'>
        {
          props.showAvatar &&
          <img className='avatar' src={window.avatar}/>
        }
        <div className='username'>&nbsp;{props.author.name}</div>
      </div>
    </div>
  );
};

export default Author;
