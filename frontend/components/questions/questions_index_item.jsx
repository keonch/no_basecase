import React from 'react';
import Author from '../users/author_container';
import { Link } from 'react-router-dom';

const QuestionsIndexItem = (props) => {
  return (
    <div>
      <div>{props.question.votes}</div>
      <Link to={`questions/${props.question.id}`}>
        {props.question.title}
      </Link>
      {
        props.showTruncBody &&
        <div>{props.question.truncBody}</div>
      }
      <Author
        verb='asked'
        authorId={props.question.authorId}
        createdAt={props.question.createdAt}/>
    </div>
  );
};

export default QuestionsIndexItem;
