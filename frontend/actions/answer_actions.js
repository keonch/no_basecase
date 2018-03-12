import * as APIUtil from '../util/answers_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

const receiveAnswer = (payload) => {
  return ({
    type: RECEIVE_ANSWER,
    answer: payload.answer,
    author: payload.author
  });
};

export const createAnswer = (questionId, answer) => (dispatch) => {
  return (
    APIUtil.createAnswer(questionId, answer)
      .then((payload) => dispatch(receiveAnswer(payload)))
  );
};
