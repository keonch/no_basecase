import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answer_actions';
import Answer from './answer';

const msp = (state, ownProps) => {
  const answer = state.entities.answers[ownProps.answerId];
  const isAuthor =
    !!state.session.currentUser &&
    state.session.currentUser.id === answer.authorId;

  return ({
    answer,
    isAuthor
  });
};

const mdp = (dispatch) => {
  return ({
    deleteAnswer: (questionId, answerId) => dispatch(deleteAnswer(
      questionId,
      answerId
    ))
  });
};

export default connect(msp, mdp)(Answer);
