import { connect } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question_actions';

import QuestionsIndex from './questions_index';

const msp = (state) => {
  return ({
    questions: state.entities.questions
  });
};

const mdp = (dispatch) => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
  });
};

export default connect(msp, mdp)(QuestionsIndex);
