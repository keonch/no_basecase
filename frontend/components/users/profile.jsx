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
        <div className='profile'>
          <div className='user-info'>
            <div className='profile-image'>
              <img className='profile-image-icon' src={window.profile} />
            </div>
            <div className='user-summary'>
              <div className='username'>{ `${this.props.users[this.props.user].name}` }</div>
              <div className='user-stats'>
                <div className='user-stat'>
                  <h4 className='user-stat-count'>{ `${this.props.answerCount}`}</h4>
                  <h4 className='user-stat-label'>answers</h4>
                </div>
                <div className='user-stat'>
                  <h4 className='user-stat-count'>{ `${this.props.questionCount}`}</h4>
                  <h4 className='user-stat-label'>{this.props.questionCount === 1 ? 'question' : 'questions'}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='user-posts'>
            <div>Top Posts</div>
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
