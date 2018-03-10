import React from 'react';

const Question = (props) => {
  return (
    <div>
      {props.title}
      {props.body}
    </div>
  );
};

export default Question;
