import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const signup = (user) => {
  return (
    (dispatch) => {
      return(
        APIUtil.signup(user).then(user => (
          dispatch(receiveCurrentUser(user))
        ), errors => (
          dispatch(receiveErrors(errors.responseJSON))
        ))
      );
    }
  );
};

export const login = user => {
  return (
    (dispatch) => {
      return (
        APIUtil.login(user).then(user => (
          dispatch(receiveCurrentUser(user))
        ), errors => (
          dispatch(receiveErrors(errors.responseJSON))
        ))
      );
    }
  );
};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
