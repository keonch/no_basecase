import merge from 'lodash/merge';

import { SELECT_SEARCHBAR, UNSELECT_SEARCHBAR } from '../actions/search_actions';

const searchReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_SEARCHBAR:
      return action.boolean;
    case UNSELECT_SEARCHBAR:
      return action.boolean;
    default:
      return state;
  }
};

export default searchReducer;
