import { connect } from 'react-redux';
import { updateAnswer, fetchAnswer } from '../../actions/answer_actions';
import AnswerEditForm from './answer_edit_form';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId,
        question = state.entities.questions[questionId] || {},
        answerId = ownProps.match.params.answerId,
        answer = state.entities.answers[answerId] || {},
        currentUser = state.session.currentUser,
        loaded = !!state.entities.answers[answerId];

  return ({
    questionId,
    question,
    answerId,
    answer,
    currentUser,
    loaded
  });
};

const mdp = (dispatch) => {
  return ({
    updateAnswer: (questionId, answerId, answer) => dispatch(updateAnswer(
      questionId,
      answerId,
      answer
    )),
    fetchAnswer: (questionId, answerId) => dispatch(fetchAnswer(
      questionId,
      answerId
    ))
  });
};

export default connect(msp, mdp)(AnswerEditForm);
