import merge from 'lodash/merge';
import {
  RECEIVE_QUESTION
} from '../actions/question_actions';
import {
  RECEIVE_ANSWER
} from '../actions/answer_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return merge({}, oldState, action.users);
    case RECEIVE_ANSWER:
      return merge({}, oldState, action.user);
    default:
      return oldState;
  }
};

export default usersReducer;
