import React from 'react';
import Moment from 'react-moment';

const Author = (props) => {
  return (
    <div className={`author-item ${props.highlight}`}>
      <div>
        {props.author.name}
      </div>

      <div>
        {props.verb} <Moment fromNow>{props.createdAt}</Moment>
      </div>
    </div>
  );
};

export default Author;
