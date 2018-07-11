import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Nav from './nav/nav_container';
import Footer from './footer/footer';
import Login from './session/login_container';
import Signup from './session/signup_container';
import QuestionsIndex from './questions/questions_index_container';
import Question from './questions/question_container';
import QuestionForm from './forms/question_form_container';
import QuestionEditForm from './forms/question_edit_form_container';
import AnswerEditForm from './forms/answer_edit_form_container';
import Sidebar from './sidebar';

const App = () => (
  <div className='app'>
    <div className='nav'>
      <Route path='/' component={Nav}/>
    </div>

    <div className='content-page'>
      <Route exact path='/' component={QuestionsIndex}/>
      <Route exact path='/questions' component={QuestionsIndex}/>
      <Switch>
        <ProtectedRoute path="/questions/ask" component={QuestionForm}/>
        <ProtectedRoute path='/questions/:questionId/edit/:answerId' component={AnswerEditForm}/>
        <ProtectedRoute path='/questions/:questionId/edit' component={QuestionEditForm}/>
        <Route path='/questions/:questionId' component={Question}/>
      </Switch>
      <AuthRoute exact path='/login' component={Login}/>
      <AuthRoute exact path='/signup' component={Signup}/>
    </div>

    <div className='footer'>
      <Route path='/' component={Footer}/>
    </div>
  </div>
);

export default App;
