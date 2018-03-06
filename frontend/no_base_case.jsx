import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// test
// import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  //test
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  // window.store = store;

  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
