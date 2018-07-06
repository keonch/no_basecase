import * as APIUtils from '../utils/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';

const receiveQuestion = (payload) => {
  return ({
    type: RECEIVE_QUESTION,
    question: payload.question,
    answers: payload.answers,
    users: payload.users
  });
};

const removeQuestion = (questionId) => {
  return ({
    type: REMOVE_QUESTION,
    questionId
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
          (questionId) => (questionId),
          (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
      );
    }
  );
};

export const fetchQuestion = (questionId) => {
  return (
    (dispatch) => {
      return(
        APIUtils.fetchQuestion(questionId)
        .then(
          (payload) => (dispatch(receiveQuestion(payload))),
          (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
      );
    }
  );
};

export const deleteQuestion = (questionId) => {
  return (
    (dispatch) => {
      return(
        APIUtils.deleteQuestion(questionId)
        .then(
          (questionId) => (dispatch(removeQuestion(questionId))),
          (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
      );
    }
  );
};
