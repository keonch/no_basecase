import { combineReducers } from 'redux';

import search from './search_reducer';
import sortedQuestions from './sorted_questions_reducer';

export default combineReducers({
  search
});
