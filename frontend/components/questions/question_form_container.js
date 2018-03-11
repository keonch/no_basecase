import { connect } from 'react-redux';
import { submitQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';

const mdp = (dispatch) => {
  return ({
    submitQuestion: (question) => dispatch(createQuestion(question))
  });
};

export default connect(null, mdp)(QuestionForm);
