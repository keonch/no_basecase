import { combineReducers } from 'redux';
import questions from './questions_reducer';
import users from './users_reducer';
import answers from './answers_reducer';

export default combineReducers({
  questions,
  answers,
  users
});
