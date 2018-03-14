import merge from 'lodash/merge';

import {
  RECEIVE_QUESTION,
  CLEAR_QUESTION
} from '../actions/question_actions';

import {
  RECEIVE_ANSWER
} from '../actions/answer_actions';

import {
  RECEIVE_VOTE
} from '../actions/vote_actions';

const answersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return merge({}, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, oldState, { [action.answer.id]: action.answer });
    case RECEIVE_VOTE:
      return merge({}, oldState, {[action.answer.id]: action.answer.votes });
    case CLEAR_QUESTION:
      return {};
    default:
      return oldState;
  }
};

export default answersReducer;
