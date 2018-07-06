import merge from 'lodash/merge';
import {
  RECEIVE_QUESTION
} from '../actions/question_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return merge({}, oldState, action.users);
    default:
      return oldState;
  }
};

export default usersReducer;
