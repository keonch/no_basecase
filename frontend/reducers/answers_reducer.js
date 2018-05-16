import merge from 'lodash/merge';
import { RECEIVE_QUESTION, CLEAR_ENTITIES } from '../actions/question_actions';
import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_VOTE } from '../actions/vote_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const answersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return merge({}, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, oldState, { [action.answer.id]: action.answer });
    case RECEIVE_VOTE:
      if (!action.answer) return oldState;
      return merge({}, oldState, { [action.answer.id]: action.answer });
    case CLEAR_ENTITIES:
      return {};
    case REMOVE_ANSWER:
      const newState = merge({}, oldState);
      delete newState[action.answerId];
      return newState;
    case RECEIVE_USER:
      return merge({}, action.answers);
    default:
      return oldState;
  }
};

export default answersReducer;
