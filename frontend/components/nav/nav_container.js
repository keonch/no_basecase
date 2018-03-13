import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Nav from './nav';

const msp = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout()),
  });
};

export default connect(msp, mdp)(Nav);
