import { connect } from 'react-redux';
import { updateAnswer } from '../../actions/answer_actions';
import AnswerEditForm from './answer_edit_form';

const mdp = (dispatch) => {
  return ({
    updateAnswer: (questionId, answer) => dispatch(updateAnswer(questionId, answer))
  });
};

export default connect(null, mdp)(AnswerEditForm);
