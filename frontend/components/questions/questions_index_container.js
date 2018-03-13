import { connect } from 'react-redux';
import {
  fetchAllQuestions,
  deleteQuestion
} from '../../actions/question_actions';
import QuestionsIndex from './questions_index';

const msp = (state) => {
  const questions = Object.values(state.entities.questions);
  const users = Object.assign({}, state.entities.users);
  return ({
    questions,
    users
  });
};

const mdp = dispatch => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
  });
};

export default connect(msp, mdp)(QuestionsIndex);
