import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { submitAnswer } from '../../actions/answer_actions';

const msp = state => {
  return ({
    state
  });
};

const mdp = dispatch => {
  return ({
    submitAnswer: (answer) => dispatch(createAnswer(answer))
  });
};

export default connect(msp, mdp)(AnswerForm);
