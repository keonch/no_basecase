import React from 'react';
import { Link } from 'react-router-dom';
import UserTag from '../users/user_tag';

const QuestionsIndexItem = (props) => {
  return (
    <div className='q-item'>

      <div className='q-stat'>
        <div className='q-votes'>
          <p className='q-votes-number'>{props.question.votes}</p>
          <p className='q-votes-label'>votes</p>
        </div>

        <div className='q-answers'>
          <p className='q-answers-number'>{props.question.answersCount}</p>
          <p className='q-answers-label'>answers</p>
        </div>
      </div>

      <div className='q-content'>
        <Link
          className='q-title'
          to={`/questions/${props.question.id}`}>
          {props.question.title}
        </Link>

        <div className='q-body'>{props.question.body}</div>

        {
          props.isOwner ?
          <button
            className='q-delete'
            onClick={() => props.deleteQuestion(props.question.id)}
            value="Delete">
          </button>
          :
          ""
        }
        <div className='q-user-info'>
          <UserTag contentType='question' author={props.author} time={props.question.created_at }/>
        </div>
      </div>
    </div>
  );
};

export default QuestionsIndexItem;
