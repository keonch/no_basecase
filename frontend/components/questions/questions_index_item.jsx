import React from 'react';
import { Link } from 'react-router-dom';

import UserTag from '../users/user_tag';

const QuestionsIndexItem = (props) => {
  
  return (
    <div>
      <p>Vote#</p>
      <p>answer#</p>
      <Link to={`/questions/${props.question.id}`}>{props.question.title}</Link>
      <div>{props.question.body}</div>
      <UserTag user={props.author} />
    </div>
  );
};

export default QuestionsIndexItem;
