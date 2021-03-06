import * as APIUtils from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const signup = (user) => (
  (dispatch) => (APIUtils.signup(user).then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const login = (user) => (
  (dispatch) => (APIUtils.login(user).then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const logout = () => (
  (dispatch) => (APIUtils.logout().then(
    () => (dispatch(receiveCurrentUser())),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);
