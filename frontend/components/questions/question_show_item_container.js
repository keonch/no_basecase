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
  const author = state.entities.users[entity.author_id];

  return ({
    entity,
    type,
    key,
    questionId,
    author,
    currentUser: state.session.currentUser
  });
};

const mdp = (disptach) => {
  return({
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    deleteAnswer: (questionId, id) => dispatch(deleteAnswer(questionId, id)),
    upvote: (type, entity, entityId) => dispatch(upvote(type, entity, entityId)),
    downvote: (type, entity, entityId) => dispatch(downvote(type, entity, entityId))
  });
};

export default connect(msp, mdp)(QuestionShowItem);
