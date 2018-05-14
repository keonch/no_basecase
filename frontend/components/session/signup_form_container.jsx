import { connect } from 'react-redux';
import React from 'react';
import { signup, login, RESET_SESSION_ERRORS } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';


const msp = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign Up',
    message: "Create your No Basecase account. It's free and only takes a minute.",
    name: '',
    emailLabel: ' (required, but never shown)',
    redirectMessage: "Already have an account? ",
    redirectLink: <Link to='/login' className='session-link'>Log in</Link>
  });
};

const mdp = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    loginDemoUser: (user) => dispatch(login(user)),
    resetErrors: () => dispatch({ type: RESET_SESSION_ERRORS })
  });
};

export default connect(msp, mdp)(SessionForm);
