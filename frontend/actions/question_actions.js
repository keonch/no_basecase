import * as APIUtil from '../util/questions_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveAllQuestions = (payload) => {
  return ({
    type: RECEIVE_ALL_QUESTIONS,
    questions: payload.questions,
    users: payload.users
  });
};

const receiveQuestion = (question) => {
  return ({
    type: RECEIVE_QUESTION,
    question
  });
};

const removeQuestion = (question) => {
  return ({
    type: REMOVE_QUESTION,
    question
  });
};

export const fetchAllQuestions = () => {
  return(
    (dispatch) => {
      return (
        APIUtil.fetchAllQuestions()
        .then((payload) => dispatch(receiveAllQuestions(payload)))
      );
    }
  );
};

export const fetchQuestion = (id) => {
  return(
    (dispatch) => {
      return (
        APIUtil.fetchQuestion(id)
        .then((question) => dispatch(receiveQuestion(question)))
      );
    }
  );
};

export const createQuestion = (question) => {
  return(
    (dispatch) => {
      return (
        APIUtil.createQuestion(question)
          .then((question) => dispatch(receiveQuestion(question)))
      );
    }
  );
};

export const updateQuestion = (question) => {
  return(
    (dispatch) => {
      return (
        APIUtil.updateQuestion(question)
        .then((question) => dispatch(receiveQuestion(question)))
      );
    }
  );
};

export const deleteQuestion = (id) => {
  return(
    (dispatch) => {
      return (
        APIUtil.deleteQuestion(id)
        .then(() => dispatch(removeQuestion()))
      );
    }
  );
};
