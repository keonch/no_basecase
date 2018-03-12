import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { submitAnswer } from '../../actions/answer_actions';

const msp = (state, ownProps) => {
  return ({
    questionId: ownProps.questionId
  });
};

const mdp = dispatch => {
  return ({
    submitAnswer: (questionId, answer) => dispatch(createAnswer(questionId, answer))
  });
};

export default connect(msp, mdp)(AnswerForm);
