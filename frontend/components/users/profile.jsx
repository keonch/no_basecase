import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';

const msp = (state) => {
  return ({

  });
}

const mdp = (dispatch) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id))
  });
}

const Profile = (props) => {
  return (
    <div></div>
  )
}

export default connect(msp, mdp)(Profile);
