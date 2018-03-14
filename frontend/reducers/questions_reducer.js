import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  CLEAR_QUESTION
} from '../actions/question_actions';

import {
  RECEIVE_VOTE
} from '../actions/vote_actions';

const questionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, oldState, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, { [action.question.id]: action.question } );
    case REMOVE_QUESTION:
      const newState = merge({}, oldState);
      delete newState[action.questionId];
      return newState;
    case RECEIVE_VOTE:
      let question = action.payload.question;
      if (!question) question = {};
      return merge({}, oldState, { [question.id]: question });
    case CLEAR_QUESTION:
      return {};
    default:
      return oldState;
  }
};

export default questionsReducer;
