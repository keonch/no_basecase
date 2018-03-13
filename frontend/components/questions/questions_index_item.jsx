import React from 'react';
import { Link } from 'react-router-dom';

const QuestionsIndexItem = (props) => {
  return (
    <div className='question-item'>

      <div className='question-item-stats'>
        <p>Vote#</p>
        <p>answer#</p>
      </div>

      <div className='question-item-summary'>
        <Link
          className='question-item-title'
          to={`/questions/${props.question.id}`}>
          {props.question.title}
        </Link>

        <div className='question-item-body'>
          {props.question.body}
        </div>

        {
          props.isOwner ?
          <button
            onClick={() => props.deleteQuestion(props.question.id)}
            value="Delete">
            DELETE
          </button>
          :
          ""
        }

        <Link className='question-item-author' to={`/users/${props.author.id}`} >{ props.author.name }</Link>
      </div>
    </div>
  );
};

export default QuestionsIndexItem;
