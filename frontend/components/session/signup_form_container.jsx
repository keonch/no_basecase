import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign Up',
    name: '',
    message: <div>Create your No Base Case account. Its free and only takes a minute.</div>
  });
};

const mdp = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user)),
  });
};

export default connect(msp, mdp)(SessionForm);
