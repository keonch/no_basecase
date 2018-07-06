import * as APIUtils from '../utils/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';

const receiveAnswer = (payload) => {
  return ({
    type: RECEIVE_ANSWER,
    answer: payload.answer,
    user: payload.user
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ANSWER_ERRORS,
    errors
  });
};

export const postAnswer = (questionId, answer) => {
  return (
    (dispatch) => {
      return(
        APIUtils.postAnswer(questionId, answer)
        .then(
          (payload) => (dispatch(receiveAnswer(payload))),
          (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
      );
    }
  );
};
