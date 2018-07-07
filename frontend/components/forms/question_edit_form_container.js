import { connect } from 'react-redux';
import { updateQuestion, fetchQuestion } from '../../actions/question_actions';
import QuestionEditForm from './question_edit_form';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId,
        question = state.entities.questions[questionId] || {},
        currentUser = state.session.currentUser,
        loaded = !!state.entities.questions[questionId];

  return ({
    questionId,
    question,
    currentUser,
    loaded
  });
};

const mdp = (dispatch) => {
  return ({
    updateQuestion: (questionId, question) => dispatch(updateQuestion(
      questionId,
      question
    )),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
  });
};

export default connect(msp, mdp)(QuestionEditForm);
