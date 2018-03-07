import React from 'react';
import NavBar from './nav/nav_bar_container';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import QuestionsIndex from './questions/index.jsx';

const App = () => (
  <div>
    <h1>App component</h1>
    <NavBar />

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={QuestionsIndex} />
    </Switch>

  </div>
);

export default App;
