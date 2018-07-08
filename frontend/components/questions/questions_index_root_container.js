import { connect } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question_actions';
import { sortQuestionsByVotes } from '../../reducers/selectors';

import QuestionsIndex from './questions_index';

const msp = (state) => {
  return ({
    questions: state.entities.questions,
    sortedQuestionIds: sortQuestionsByVotes(state.entities.questions),
    page: 'root'
  });
};

const mdp = (dispatch) => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
  });
};

export default connect(msp, mdp)(QuestionsIndex);
