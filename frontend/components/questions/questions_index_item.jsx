import React from 'react';
import { Link } from 'react-router-dom';

const QuestionsIndexItem = (props) => {

  return (
    <div className='question-item'>
      <div className='question-stats'>
        <p>Vote#</p>
        <p>answer#</p>
      </div>
      <div className='question-summary'>
        <Link className='question-title' to={`/questions/${props.question.id}`}>{props.question.title}</Link>
        <div className='question-body-trunk'>{props.question.body}</div>
        <Link className='user-tag-name' to={`/users/${props.author.id}`} >{ props.author.name }</Link>
      </div>
    </div>
  );
};

export default QuestionsIndexItem;
