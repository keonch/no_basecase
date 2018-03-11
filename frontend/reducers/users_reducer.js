import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION
} from '../actions/question_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, oldState, action.users);
    case RECEIVE_QUESTION:
      return action.users;
    default:
      return oldState;
  }
};

export default usersReducer;
