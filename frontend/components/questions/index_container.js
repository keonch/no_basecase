import { connect } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question_actions';
import QuestionsIndex from './index';

const msp = (state) => {
  const questions = Object.values(state.questions);
  return ({
    questions
  });
};

const mdp = dispatch => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
  });
};

export default connect(msp, mdp)(QuestionsIndex);
