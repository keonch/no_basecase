import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import RightNav from './right_nav';

const msp = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user))
  });
};

export default connect(msp, mdp)(RightNav);
