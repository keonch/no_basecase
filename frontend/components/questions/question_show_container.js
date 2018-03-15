import { connect } from 'react-redux';
import QuestionShow from './question_show';
import {
  updateQuestion,
  fetchQuestion,
  deleteQuestion,
  clearQuestions
} from '../../actions/question_actions';
import {
  deleteAnswer
} from '../../actions/answer_actions';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId];
  const answers = Object.values(state.entities.answers);

  return({
    questionId,
    question,
    answers,
    currentUser: state.session.currentUser,
    users: state.entities.users
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    deleteAnswer: (questionId, id) => dispatch(deleteAnswer(questionId, id)),
    clearQuestions: () => dispatch(clearQuestions())
  });
};

export default connect(msp, mdp)(QuestionShow);
