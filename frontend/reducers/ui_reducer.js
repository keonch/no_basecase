import { combineReducers } from 'redux';

import search from './search_reducer';
import topQuestions from './top_questions_reducer';

export default combineReducers({
  search,
  topQuestions
});
