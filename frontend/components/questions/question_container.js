import { connect } from 'react-redux';
import Question from './question';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  return ({
    questionId
  });
};

const mdp = (dispatch) => {
  return ({

  });
};

export default connect(msp, mdp)(Question);
