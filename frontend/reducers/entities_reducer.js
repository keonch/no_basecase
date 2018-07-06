import { combineReducers } from 'redux';
import questions from './questions_reducer';
import users from './users_reducer';

export default combineReducers({
  questions,
  users
});
