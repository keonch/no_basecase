import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { clearEntities } from '../../actions/question_actions';

const msp = (state, ownProps) => {
  const answerCount = Object.keys(state.entities.answers).length ;
  const questionCount = Object.keys(state.entities.questions).length;
  return ({
    users: state.entities.users,
    user: ownProps.match.params.userId,
    answers: state.entities.answers,
    questions: state.entities.questions,
    answerCount: answerCount,
    questionCount: questionCount
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

  renderQA() {
    const index = this.props.questions.map((question) => {
      return (
        <div>{ question.title }</div>
      )
    })
    return (
      <div>{ index }</div>
    )
  }

  renderUser() {
    if (this.props.users[this.props.user]) {
      return (
        <div>
          <div className='profile-image'>
            <img className='profile-image-icon' src={window.profile} />
            ### REPUTATION
          </div>
          <div>{ `${this.props.users[this.props.user].name}` }</div>
          <div>{ `${this.props.answerCount}`}</div>
          <div>{ `${this.props.questionCount}`}</div>

          <div className='user-posts'>
            <div>Top Posts</div>
            <div>{  }</div>
          </div>
        </div>
      )
    } else {
      return
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
