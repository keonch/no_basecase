import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { updateQuestion, fetchQuestion } from '../../actions/question_actions';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  return({
    questionId,
    questions: state.entities.questions
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    updateQuestion: (question) => dispatch(updateQuestion(question))
  });
};

export default connect(msp, mdp)(QuestionShow);
