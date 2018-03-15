import { connect } from 'react-redux';
import QuestionShowItem from './question_show_item';

import { deleteQuestion } from '../../actions/question_actions';
import { deleteAnswer } from '../../actions/answer_actions';
import {
  upvote,
  downvote
} from '../../actions/vote_actions';

const msp = (state, ownProps) => {
  const entity = ownProps.entity;
  const type = ownProps.type;
  const key = ownProps.key;
  const questionId = ownProps.questionId;

  return ({
    entity,
    type,
    key,
    questionId,
    users: state.entities.users,
    currentUser: state.session.currentUser
  });
};

const mdp = (disptach) => {
  return({
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    deleteAnswer: (questionId, id) => dispatch(deleteAnswer(questionId, id)),
    upvote: (entity, entityId) => dispatch(upvote(entity, entityId)),
    downvote: (entity, entityId) => dispatch(downvote(entity, entityId))
  });
};

export default connect(msp, mdp)(QuestionShowItem);
