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
import FrontContainer from './front/front_container';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import QuestionFormContainer from './questions/question_form_container';
import QuestionShowContainer from './questions/question_show_container';
import Sidebar from './sidebar/sidebar.jsx';
import Footer from './footer/footer';

const App = () => (
  <div className='app'>
    <header className='header'>

      <NavBar />

    </header>

    <div className='page'>
      <div className='content'>

        <Switch>
          <AuthRoute path="/login" component={LogInFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/questions/ask" component={QuestionFormContainer} />
          <Route path="/questions/:questionId" component={QuestionShowContainer} />
          <Route path='/' component={Sidebar} />
        </Switch>

        <Route exact path="/" component={FrontContainer} />
        <Route exact path="/questions" component={QuestionsIndexContainer} />

      </div>
    </div>

    <footer className='footer'>

      <Footer />

    </footer>
  </div>
);

export default App;
