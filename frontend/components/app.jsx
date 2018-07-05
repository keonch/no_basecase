import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Nav from './nav/nav_container';
import QuestionsIndex from './questions/questions_index';
import Login from './session/login_container';
import Signup from './session/signup_container';
import Footer from './footer/footer';

const App = () => (
  <div className='app'>
    <div className='nav'>
      <Route path='/' component={Nav}/>
    </div>

    <div className='page-content'>
      <Route exact path='/' component={QuestionsIndex}/>
      <Route exact path='/questions' component={QuestionsIndex}/>
      <AuthRoute path='/login' component={Login}/>
      <AuthRoute path='/signup' component={Signup}/>
    </div>

    <div className='footer'>
      <Route path='/' component={Footer}/>
    </div>
  </div>
);

export default App;
