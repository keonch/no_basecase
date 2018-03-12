import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/question_actions';

const questionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, oldState, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, { [action.question.id]: action.question });
    case REMOVE_QUESTION:
      const newState = oldState;
      delete newState[action.question.id];
      return newState;
    default:
      return oldState;
  }
};

export default questionsReducer;
