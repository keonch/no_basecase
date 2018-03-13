import { connect } from 'react-redux';
import Search from './search';
import {
  selectSearchBar,
  unselectSearchBar
} from '../../actions/search_actions';

import { fetchSearchQuestions } from '../../actions/question_actions';

const msp = (state) => {
  return ({
    selected: state.ui.search
  });
};

const mdp = (dispatch) => {
  return ({
    searchForQuestion: (searchText) => dispatch(fetchSearchQuestions(searchText)),
    selectSearchBar: () => dispatch(selectSearchBar()),
    unselectSearchBar: () => dispatch(unselectSearchBar())
  });
};

export default connect(msp, mdp)(Search);
