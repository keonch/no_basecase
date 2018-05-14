import { combineReducers } from 'redux';

import questions from './questions_reducer';
import users from './users_reducer';
import answers from './answers_reducer';
import sortedQuestions from './sorted_questions_reducer';

export default combineReducers({
  questions,
  answers,
  users,
  sortedQuestions
});
