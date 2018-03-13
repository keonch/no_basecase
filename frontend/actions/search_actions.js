export const SELECT_SEARCHBAR = 'SELECT_SEARCHBAR';
export const UNSELECT_SEARCHBAR = 'UNSELECT_SEARCHBAR';

export const selectSearchBar = () => {
  return ({
    type: SELECT_SEARCHBAR,
    boolean: true
  });
};

export const unselectSearchBar = () => {
  return ({
    type: UNSELECT_SEARCHBAR,
    boolean: false
  });
};
