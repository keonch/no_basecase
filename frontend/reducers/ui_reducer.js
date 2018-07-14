import merge from 'lodash/merge';
import { SORT_QUESTIONS, SORT_ANSWERS } from '../actions/ui_actions';

const _initialSort = Object.freeze({
  sortQuestions: 'votes',
  sortAnswers: 'votes'
});

const uiReducer = (oldState = _initialSort, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SORT_QUESTIONS:
      return merge({}, oldState, { sortQuestions: action.sortQuestions });
    case SORT_ANSWERS:
      return merge({}, oldState, { sortAnswers: action.sortAnswers });
    default:
      return oldState;
  }
};

export default uiReducer;
