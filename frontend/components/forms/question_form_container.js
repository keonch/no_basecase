import { connect } from 'react-redux';
import { postQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';

const mdp = (dispatch) => {
  return ({
    postQuestion: (question) => dispatch(postQuestion(question))
  });
};

export default connect(null, mdp)(QuestionForm);
