import * as APIUtils from '../utils/vote_api_util';

export const RECEIVE_QUESTION_VOTE = 'RECEIVE_QUESTION_VOTE';
export const RECEIVE_ANSWER_VOTE ='RECEIVE_ANSWER_VOTE';
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';

const receiveQuestionVote = ({ question }) => {
  return ({
    type: RECEIVE_QUESTION_VOTE,
    question
  });
};

const receiveAnswerVote = ({ answer }) => {
  return ({
    type: RECEIVE_ANSWER_VOTE,
    answer
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_VOTE_ERRORS,
    errors
  });
};

export const upvoteQuestion = (questionId) => (
  (dispatch) => (APIUtils.upvoteQuestion(questionId).then(
    (payload) => dispatch(receiveQuestionVote(payload)),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const downvoteQuestion = (questionId) => (
  (dispatch) => (APIUtils.downvoteQuestion(questionId).then(
    (payload) => dispatch(receiveQuestionVote(payload)),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const upvoteAnswer = (questionId, answerId) => (
  (dispatch) => (APIUtils.upvoteAnswer(questionId, answerId).then(
    (payload) => dispatch(receiveAnswerVote(payload)),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const downvoteAnswer = (questionId, answerId) => (
  (dispatch) => (APIUtils.downvoteAnswer(questionId, answerId).then(
    (payload) => dispatch(receiveAnswerVote(payload)),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);
