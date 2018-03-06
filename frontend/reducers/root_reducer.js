import { combineReducers } from 'redux';

import session from './session_reducer';
import sessionErrors from './session_errors_reducer';

const rootReducer = combineReducers({
  session,
  sessionErrors
});

export default rootReducer;
