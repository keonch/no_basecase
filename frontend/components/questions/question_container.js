import { connect } from 'react-redux';
import {
  fetchQuestion,
  deleteQuestion
} from '../../actions/question_actions';
import {
  upvoteQuestion,
  downvoteQuestion
} from '../../actions/vote_actions';

import Question from './question';

const msp = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId,
        question = state.entities.questions[questionId] || {},
        answerCount = Object.keys(state.entities.answers).length,
        author = state.entities.users[question.authorId],
        isAuthor = !!state.session.currentUser &&
          state.session.currentUser.id === question.authorId;

  return ({
    questionId,
    question,
    answerCount,
    author,
    isAuthor
  });
};

const mdp = (dispatch) => {
  return ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    upvoteQuestion: (questionId) => dispatch(upvoteQuestion(questionId)),
    downvoteQuestion: (questionId) => dispatch(downvoteQuestion(questionId))
  });
};

export default connect(msp, mdp)(Question);
