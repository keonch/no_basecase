import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBar from './nav/nav_bar';

import MainContainer from './main/main_container';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import QuestionsIndex from './questions/index_container';

import Footer from './footer/footer';

const App = () => (
  <div className='app'>
    <header className='header'>
      <NavBar />
    </header>

    <div className='page'>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/questions" component={QuestionsIndex} />
      </Switch>
    </div>

    <div className='footer'>
      <Footer />
    </div>
  </div>
);

export default App;
