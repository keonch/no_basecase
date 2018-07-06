import merge from 'lodash/merge';
import {
  RECEIVE_QUESTION
} from '../actions/question_actions';

const questionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return merge({}, action.question);
    default:
      return oldState;
  }
};

export default questionsReducer;
