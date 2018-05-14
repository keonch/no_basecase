import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const CLEAR_USERS = 'CLEAR_USERS';

const receiveUser = (payload) => {
  return ({
    type: RECEIVE_USER,
    user: payload.user,
    questions: payload.questions,
    answers: payload.answers
  })
}

export const clearUsers = () => {
  return ({
    type: CLEAR_USERS
  })
}

export const fetchUser = (id) => (dispatch) => {
  return (
    APIUtil.fetchUser(id)
      .then((payload) => dispatch(receiveUser(payload)))
  );
}
