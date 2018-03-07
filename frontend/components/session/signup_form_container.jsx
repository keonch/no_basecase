import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
// import { Link } from 'react-router-dom';

const msp = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'Signup',
    name: ''
  });
};
// navLink: <Link to="/login">log in instead</Link>,

const mdp = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user)),
  });
};

export default connect(msp, mdp)(SessionForm);
