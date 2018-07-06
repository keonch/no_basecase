import React from 'react';
import Moment from 'react-moment';

const Author = (props) => {
  const highlight = props.type === 'question' ? 'highlight' : '';
  return (
    <div className={`author-item ${highlight}`}>
      <div>
        {props.author.name}
      </div>
      <div>
        asked
        <Moment fromNow>{this.props.createdAt}</Moment>
      </div>
    </div>
  );
};

export default Author;
