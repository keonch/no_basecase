import { connect } from 'react-redux';
import QuestionShow from './question_show';

import {
  updateQuestion,
  fetchQuestion,
  clearQuestions
} from '../../actions/question_actions';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId];
  const answers = Object.values(state.entities.answers);

  return({
    questionId,
    question,
    answers,
    currentUser: state.session.currentUser,
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    clearQuestions: () => dispatch(clearQuestions())
  });
};

export default connect(msp, mdp)(QuestionShow);
