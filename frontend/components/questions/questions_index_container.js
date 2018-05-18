import { connect } from 'react-redux';
import {
  fetchAllQuestions,
  fetchAllQuestionsFront,
  clearEntities
} from '../../actions/question_actions';
import QuestionsIndex from './questions_index';

const msp = (state, {frontPage}) => {
  return ({
    questions: state.entities.questions,
    sortedQuestions: state.entities.sortedQuestions,
    users: state.entities.users,
    frontPage
  });
};

const mdp = dispatch => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    fetchAllQuestionsFront: () => dispatch(fetchAllQuestionsFront()),
    clearEntities: () => dispatch(clearEntities()),
  });
};

export default connect(msp, mdp)(QuestionsIndex);
