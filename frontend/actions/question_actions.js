import * as APIUtil from '../util/questions_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';
export const RECEIVE_ALL_QUESTIONS_FRONT = 'RECEIVE_ALL_QUESTIONS_FRONT';
export const RECEIVE_SEARCH_QUESTIONS = 'RECEIVE_SEARCH_QUESTIONS';

const receiveAllQuestions = (payload) => {
  return ({
    type: RECEIVE_ALL_QUESTIONS,
    questions: payload.questions,
    users: payload.users
  });
};

const receiveSearchQuestions = (payload) => {
  return ({
    type: RECEIVE_SEARCH_QUESTIONS,
    questions: payload.questions,
    users: payload.users
  });
};

const receiveAllQuestionsFront = (payload) => {
  return ({
    type: RECEIVE_ALL_QUESTIONS_FRONT,
    questions: payload.questions,
    users: payload.users,
    sortedQuestions: payload.order
  });
};

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

export const clearQuestions = () => {
  return ({
    type: CLEAR_QUESTIONS
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
        .then((payload) => {

          return (
            dispatch(receiveQuestion(payload))
          );
        })
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

export const deleteQuestion = (questionId) => {
  return(
    (dispatch) => {
      return (
        APIUtil.deleteQuestion(questionId)
        .then((questionId) => dispatch(removeQuestion(questionId)))
      );
    }
  );
};

export const fetchSearchQuestions = (searchText) => (dispatch) => {
  return (
    APIUtil.fetchSearchQuestions(searchText)
    .then((questions) => dispatch(receiveSearchQuestions(questions)))
  );
};

export const fetchAllQuestionsFront = () => (dispatch) => {
  return (
    APIUtil.fetchAllQuestionsFront()
    .then((payload) => dispatch(receiveAllQuestionsFront(payload)))
  );
};
