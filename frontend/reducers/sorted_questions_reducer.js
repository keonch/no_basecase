import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS_FRONT,
  CLEAR_QUESTIONS,
  REMOVE_QUESTION
} from '../actions/question_actions';

const frontPageReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS_FRONT:
      return action.sortedQuestions;
    case REMOVE_QUESTION:
      const newState = oldState.slice();
      const idx = newState.indexOf(action.questionId);
      if (idx !== -1) newState.splice(idx, 1);
      return newState;
    case CLEAR_QUESTIONS:
      return [];
    default:
      return oldState;
  }
};

export default frontPageReducer;
