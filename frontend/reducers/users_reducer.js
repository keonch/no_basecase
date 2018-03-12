import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION
} from '../actions/question_actions';

import {
  RECEIVE_ANSWER
} from '../actions/answer_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, oldState, action.users);
    case RECEIVE_QUESTION:
      return merge({}, oldState, action.users);
    case RECEIVE_ANSWER:
      return merge({}, oldState, action.author);
    default:
      return oldState;
  }
};

export default usersReducer;
