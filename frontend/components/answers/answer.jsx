import React from 'react';
import Author from '../users/author_container';

const Answer = (props) => {
  return (
    <div>
      <div>{props.answer.body}</div>

      {
        props.isAuthor &&
        <div>
          <button>Edit</button>
          <button onClick={() => props.deleteAnswer(props.questionId, props.answer.id)}>Delete</button>
        </div>
      }

      <Author
        verb='answered'
        authorId={props.answer.authorId}
        createdAt={props.answer.createdAt}/>
    </div>
  );
};

export default Answer;
