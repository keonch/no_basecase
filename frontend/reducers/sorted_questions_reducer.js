import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS_FRONT,
  CLEAR_QUESTIONS
} from '../actions/question_actions';

const frontPageReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS_FRONT:
      return action.sortedQuestions;
    case CLEAR_QUESTIONS:
      return [];
    default:
      return oldState;
  }
};

export default frontPageReducer;
