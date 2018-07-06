import { connect } from 'react-redux';
import { sortAnswersByVotes } from '../../reducers/selectors';
import {
  fetchQuestion,
  deleteQuestion
} from '../../actions/question_actions';
import Question from './question';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId] || {};
  const isAuthor = state.session.currentUser ? (
    state.session.currentUser.id === question.authorId
  ) : (
    false
  );

  return ({
    questionId,
    question,
    sortedAnswerIds: sortAnswersByVotes(state.entities.answers),
    isAuthor
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
  });
};

export default connect(msp, mdp)(Question);
