import React from 'react';
import Answer from './answer_container';

const AnswersIndex = (props) => {
    return (
      <ul>
        {
          props.sortedAnswerIds.map((answerId) => (
            <Answer
              key={answerId}
              questionId={props.questionId}
              answerId={answerId}/>
          ))
        }
      </ul>
    );
};

export default AnswersIndex;
