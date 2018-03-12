import * as APIUtil from '../util/answers_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

const receiveAnswer = (answer) => {
  return ({
    type: RECEIVE_ANSWER,
    answer
  });
};

export const createAnswer = (questionId, answer) => (dispatch) => {
  return (
    APIUtil.createAnswer(questionId, answer)
      .then((answer) => dispatch(receiveAnswer(answer)))
  );
};
