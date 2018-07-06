import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import { sortAnswersByVotes } from '../../reducers/selectors';
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
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
  });
};

export default connect(msp, mdp)(Question);
