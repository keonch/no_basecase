import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { clearEntities } from '../../actions/question_actions';

const msp = (state, ownProps) => {
  return ({
    users: ownProps.match.params.userId,
    user: state.entities.users
  });
}

const mdp = (dispatch) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    clearEntities: () => dispatch(clearEntities())
  });
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.renderUser = this.renderUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user);
    window.scrollTo(0, 0);
  }

  renderUser() {
    if (this.props.users[this.props.user]) {
      return (
        <div>
          { `${this.props.users[this.props.user].name}` } Page
        </div>
      )
    } else {
      return (
        <div>
          { `${this.props.user}` }
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderUser() }
      </div>
    )
  }

  componentWillUnmount() {
    this.props.clearEntities();
  }
}

export default connect(msp, mdp)(Profile);
