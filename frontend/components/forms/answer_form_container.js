import { connect } from 'react-redux';
import { postAnswer } from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mdp = (dispatch) => {
  return ({
    postAnswer: (questionId, answer) => dispatch(postAnswer(questionId, answer))
  });
};

export default connect(msp, mdp)(AnswerForm);
