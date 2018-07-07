import { connect } from 'react-redux';
import {
  updateAnswer,
  fetchAnswer
} from '../../actions/answer_actions';

import AnswerEditForm from './answer_edit_form';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const answerId = ownProps.match.params.answerId;
  const answer = state.entities.answers[answerId] || {};
  const currentUser = state.session.currentUser;
  const loaded = !currentUser || !!state.entities.answers[answerId];
  return ({
    questionId,
    answerId,
    answer,
    currentUser,
    loaded
  });
};

const mdp = (dispatch) => {
  return ({
    updateAnswer: (questionId, answer) => dispatch(updateAnswer(
      questionId,
      answer
    )),
    fetchAnswer: (questionId, answerId) => dispatch(fetchAnswer(
      questionId,
      answerId
    ))
  });
};

export default connect(msp, mdp)(AnswerEditForm);
