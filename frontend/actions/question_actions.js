import * as APIUtils from '../utils/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';

const receiveQuestion = ({ question }) => {
  return ({
    type: RECEIVE_QUESTION,
    question
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_QUESTION_ERRORS,
    errors
  });
};

export const postQuestion = (question) => {
  return (
    (dispatch) => {
      return(
        APIUtils.postQuestion(question)
        .then(
          (payload) => (dispatch(receiveQuestion(payload))),
          (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
      );
    }
  );
};
