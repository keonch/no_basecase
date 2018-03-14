import * as APIUtil from '../util/votes_api_util';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';

const receiveVote = (votes) => {
  return ({
    type: RECEIVE_VOTE,
    votes
  });
};

export const upvote = (entity, entityId) => {
  return (
    (dispatch) => {
      return (
        APIUtil.upvote(entity, entityId)
        .then((voteCount) => dispatch(receiveVote(voteCount)))
      );
    }
  );
};

export const downvote = (entity, entityId) => {
  return (
    (dispatch) => {
      return (
        APIUtil.downvote(entity, entityId)
        .then((votes) => dispatch(receiveVote(votes)))
      );
    }
  );
};
