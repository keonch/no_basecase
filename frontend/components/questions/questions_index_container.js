import { connect } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question_actions';
import { sortQuestionsByVotes } from '../../reducers/selectors';

import QuestionsIndex from './questions_index';

const msp = (state, ownProps) => {
  return ({
    page: ownProps.match.path,
    questions: state.entities.questions,
    sortedQuestionIds: sortQuestionsByVotes(state.entities.questions)
  });
};

const mdp = (dispatch) => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
  });
};

export default connect(msp, mdp)(QuestionsIndex);
