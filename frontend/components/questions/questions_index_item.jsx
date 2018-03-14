import React from 'react';
import { Link } from 'react-router-dom';
import UserTag from '../users/user_tag';

const QuestionsIndexItem = (props) => {
  return (
    <div className='question-item'>

      <div className='question-item-stats'>
        <div className='question-item-votes'>
          <h2>{props.question.votes}</h2>
          <h3>votes</h3>
        </div>

        <div className='question-item-answers'>
          <h2>{props.question.answersCount}</h2>
          <h3>answers</h3>
        </div>
      </div>

      <div className='question-item-summary'>
        <div className="question-item-header">
          <Link
            className='question-item-title'
            to={`/questions/${props.question.id}`}>
            {props.question.title}
          </Link>
        </div>

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
        <div className='author-info'>
          <UserTag contentType='question' author={props.author} time={props.question.created_at }/>
        </div>
      </div>
    </div>
  );
};

export default QuestionsIndexItem;
