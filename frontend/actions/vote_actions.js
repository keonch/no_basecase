import * as APIUtil from '../util/votes_api_util';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';

const receiveVote = (payload) => {
  return ({
    type: RECEIVE_VOTE,
    payload
  });
};

export const upvote = (type, entity, entityId) => {
  return (
    (dispatch) => {
      return (
        APIUtil.upvote(type, entity, entityId)
        .then((votes) => dispatch(receiveVote(votes)))
      );
    }
  );
};

export const downvote = (type, entity, entityId) => {
  return (
    (dispatch) => {
      return (
        APIUtil.downvote(type, entity, entityId)
        .then((votes) => dispatch(receiveVote(votes)))
      );
    }
  );
};
