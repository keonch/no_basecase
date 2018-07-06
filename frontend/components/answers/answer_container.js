import { connect } from 'react-redux';
import Answer from './answer';

const msp = (state, ownProps) => {
  const answer = state.entities.answers[ownProps.answerId];
  const isAuthor = state.session.currentUser ? (
    state.session.currentUser.id === answer.authorId
  ) : (
    false
  );
  return ({
    answer,
    isAuthor
  });
};

const mdp = (dispatch) => {
  return ({

  });
};

export default connect(msp, mdp)(Answer);
