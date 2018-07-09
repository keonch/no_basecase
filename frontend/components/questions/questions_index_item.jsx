import React from 'react';
import Author from '../users/author';
import { Link } from 'react-router-dom';

const QuestionsIndexItem = (props) => {
  const styleClass = props.page === '/' ? 'single-line' : 'box';
  return (
    <div className='question index-item'>
      <div className='stats'>
        <div>{props.question.votes}</div>
        <div>votes</div>
        <div>{props.question.answerCount}</div>
        <div>answers</div>
      </div>

      <Link
        className='title'
        to={`questions/${props.question.id}`}>
        {props.question.title}
      </Link>
      {
        props.page === '/questions' &&
        <div className='body'>{props.question.truncBody}</div>
      }

      <Author
        verb='asked'
        author={props.author}
        styleClass={styleClass}
        createdAt={props.question.createdAt}/>
    </div>
  );
};

export default QuestionsIndexItem;
