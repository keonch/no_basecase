import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


const App = () => (
  <div className='app'>
    from App
  </div>
);

export default App;
