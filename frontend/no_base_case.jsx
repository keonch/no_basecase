import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// test
// import { login, signup, logout } from './actions/session_actions';
import {
  fetchQuestion,
  fetchAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from './actions/question_actions';

import {
  createAnswer
} from './actions/answer_actions';

import {
  upvote,
  downvote
} from './actions/vote_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  // window.store = store;
  // window.fetchQuestion = fetchQuestion;
  // window.fetchAllQuestions = fetchAllQuestions;
  // window.createQuestion = createQuestion;
  window.updateQuestion = updateQuestion;
  window.deleteQuestion = deleteQuestion;
  window.createAnswer = createAnswer;
  window.upvote = upvote;
  window.downvote = downvote;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
