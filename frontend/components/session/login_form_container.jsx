import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'Log In',
    message: <div>No Base Case is part of the Manhattan pod network of AA communities.</div>
  });
};

const mdp = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user)),
  });
};

export default connect(msp, mdp)(SessionForm);
