import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import Question from './question';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId] || {};
  return ({
    questionId,
    question
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
  });
};

export default connect(msp, mdp)(Question);
