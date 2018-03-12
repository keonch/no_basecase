import { connect } from 'react-redux';
import AnswerForm from './answer_form';

const msp = state => {
  return ({
    state
  });
};

const mdp = dispatch => {
  return ({
    
  });
};

export default connect(msp, mdp)(AnswerForm);
