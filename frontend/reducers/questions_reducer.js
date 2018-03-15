import merge from 'lodash/merge';

import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  CLEAR_QUESTIONS,
  RECEIVE_ALL_QUESTIONS_FRONT
} from '../actions/question_actions';

import {
  RECEIVE_ANSWER,
  REMOVE_ANSWER
} from '../actions/answer_actions';

import {
  RECEIVE_VOTE
} from '../actions/vote_actions';

const questionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, oldState, action.questions);
    case RECEIVE_ALL_QUESTIONS_FRONT:
      return merge({}, oldState, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, { [action.question.id]: action.question } );
    case REMOVE_QUESTION:
      let newState = merge({}, oldState);
      delete newState[action.questionId];
      return newState;
    case RECEIVE_ANSWER:
      newState = merge({}, oldState);
      newState[action.answer.question_id].answersCount += 1;
      return merge({}, oldState, newState);
    case REMOVE_ANSWER:
      newState = merge({}, oldState);
      newState[action.questionId].answersCount -= 1;
      return merge({}, oldState, newState);
    case RECEIVE_VOTE:
      if (!action.question) return oldState;
      return merge({}, oldState, { [action.question.id]: action.question });
    case CLEAR_QUESTIONS:
      return {};
    default:
      return oldState;
  }
};

export default questionsReducer;
