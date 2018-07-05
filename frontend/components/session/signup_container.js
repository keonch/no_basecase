import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const msp = (state) => {
  return ({
    type: 'Sign Up',
    header: 'Create your No Basecase account. It only takes a minute.',
    emailTag: '(required, but never shown)'
  });
};

const mdp = (dispatch) => {
  return ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  });
};

export default connect(msp, mdp)(SessionForm);
