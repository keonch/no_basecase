import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { selectAnswers } from '../../reducers/selectors';

import {
  updateQuestion,
  fetchQuestion,
  clearQuestions
} from '../../actions/question_actions';

import { clearUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId];
  const answers = selectAnswers(state.entities.answers);

  return({
    questionId,
    question,
    answers,
    currentUser: state.session.currentUser
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    clearQuestions: () => dispatch(clearQuestions()),
    clearUsers: () => dispatch(clearUsers()),
  });
};

export default connect(msp, mdp)(QuestionShow);
