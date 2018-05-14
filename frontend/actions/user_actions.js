import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (payload) => {
  console.log(payload);
  return ({
    type: RECEIVE_USER,
    users: payload.users,
    questions: payload.questions,
    answers: payload.answers
  })
}

export const fetchUser = (id) => (dispatch) => {
  return (
    APIUtil.fetchUser(id)
      .then((payload) => dispatch(receiveUser(payload)))
  );
}
