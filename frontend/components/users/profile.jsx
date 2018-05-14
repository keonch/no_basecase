import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return ({
    user: ownProps.match.params.userId
  });
}

const mdp = (dispatch) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id))
  });
}

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.user)
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default connect(msp, mdp)(Profile);
