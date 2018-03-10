import { connect } from 'react-redux';
import React from 'react';
import { login, RESET_SESSION_ERRORS } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const msp = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'Log In',
    message: "No Basecase is part of the Manhattan Pod network of aA community.",
    redirectMessage: "Don't have an account? ",
    redirectLink: <Link to='/signup' className='session-link'>Sign up</Link>
  });
};

const mdp = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user)),
    resetErrors: () => dispatch({ type: RESET_SESSION_ERRORS })
  });
};

export default connect(msp, mdp)(SessionForm);
