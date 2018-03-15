import * as APIUtil from '../util/answers_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

const receiveAnswer = (payload) => {
  return ({
    type: RECEIVE_ANSWER,
    answer: payload.answer,
    author: payload.author,
    answersCount: payload.answersCount
  });
};

const removeAnswer = (payload) => {
  return ({
    type: REMOVE_ANSWER,
    answerId: payload.id,
    questionId: payload.question_id
  });
};

export const createAnswer = (questionId, answer) => (dispatch) => {
  return (
    APIUtil.createAnswer(questionId, answer)
      .then((payload) => dispatch(receiveAnswer(payload)))
  );
};

export const deleteAnswer = (questionId, id) => (dispatch) => {
  return (
    APIUtil.deleteAnswer(questionId, id)
      .then((payload) => dispatch(removeAnswer(payload)))
  );
};
