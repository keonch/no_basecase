import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = (state) => {
  return ({
    type: 'Log In',
    header: 'No Basecase is a Q&A application developed by Keon Choi.'
  });
};

const mdp = (dispatch) => {
  return ({
    login: (user) => dispatch(login(user))
  });
};

export default connect(msp, mdp)(SessionForm);
