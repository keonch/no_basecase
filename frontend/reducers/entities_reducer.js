import { combineReducers } from 'redux';
import questions from './questions/questions_reducer';

const entitiesReducer = combineReducers({
  questions
});

export default entitiesReducer;
