import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../../actions/question_actions';

const questionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
    case RECEIVE_QUESTION:
    case REMOVE_QUESTION:
    default:
      return oldState;
  }
}
