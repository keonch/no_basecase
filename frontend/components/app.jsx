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

import NavContainer from './nav/nav_container';
import Front from './front/front';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import QuestionFormContainer from './questions/question_form_container';
import QuestionShowContainer from './questions/question_show_container';
import Sidebar from './sidebar/sidebar.jsx';
import Footer from './footer/footer';
import QuestionsSearch from './questions/questions_search.jsx';

const App = () => (
  <div className='app'>
    <header className='header'>

      <NavContainer />

    </header>

    <div className='page'>
      <div className='content'>

        <Switch>
          <AuthRoute path="/login" component={LogInFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/questions/ask" component={QuestionFormContainer} />
          <Route path="/questions/search" component={QuestionsSearch} />
          <Route path="/questions/:questionId" component={QuestionShowContainer} />
          <Route path='/' component={Sidebar} />
        </Switch>

        <Route exact path="/" component={Front} />
        <Route exact path="/questions" component={QuestionsIndexContainer} />

      </div>
    </div>

    <footer className='footer'>

      <Footer />

    </footer>
  </div>
);

export default App;
