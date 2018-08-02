import { connect } from 'react-redux';
import { search } from '../../actions/question_actions';
import SearchForm from './search_form';

const mdp = (dispatch) => {
  return ({
    search: (searchText) => dispatch(search(searchText))
  });
};

export default connect(null, mdp)(SearchForm);
