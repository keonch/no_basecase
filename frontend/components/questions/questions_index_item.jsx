import React from 'react';
import Author from '../users/author';
import { Link } from 'react-router-dom';

const QuestionsIndexItem = (props) => {
  const styleClass = props.page === '/' ? 'single-line' : 'box';
  const answered = props.question.answerCount > 0 ? 'answered' : '';
  return (
    <div className={`question-${styleClass} index-item`}>
      <div className='stats'>
        <div className='votes'>
          <div className='vote-number'>{props.question.votes}</div>
          <span>votes</span>
        </div>
        <div className={`answers ${answered}`}>
          <div className='answer-number'>{props.question.answerCount}</div>
          <span>answers</span>
        </div>
      </div>

      <div className='title'>
        <Link
          to={`questions/${props.question.id}`}>
          {props.question.title}
        </Link>
      </div>
      {
        props.page === '/questions' &&
        <div className='body'>{props.question.truncBody}</div>
      }

      <Author
        verb='asked'
        author={props.author}
        showAvatar={props.page !== '/'}
        createdAt={props.question.createdAt}/>
    </div>
  );
};

export default QuestionsIndexItem;
