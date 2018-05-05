import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserTag from '../users/user_tag';
import Moment from 'react-moment';

class QuestionsFrontItem extends React.Component {
  render() {
    return (
      <div className='front-item'>

        <div className='front-stat'>
          <div className='front-votes'>
            <p className='front-votes-number'>{this.props.question.votes}</p>
            <p className='front-votes-label'>votes</p>
          </div>

          <div className='front-answers'>
            <p className='front-answers-number'>{this.props.question.answersCount}</p>
            <p className='front-answers-label'>answers</p>
          </div>
        </div>

        <div className='front-content'>
          <div className='front-title'>
            <Link
              className='front-title-link'
              to={`/questions/${this.props.question.id}`}>
              {this.props.question.title}
            </Link>
          </div>

          <div className='front-user-tag'>
            <Link
              className='user-tag-author' to={`/users/${this.props.author.id}`} >
              { this.props.author.name }
            </Link>

            <div className='user-tag-time'>
              asked <Moment fromNow>{this.props.question.created_at}</Moment>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

const msp = (state, ownProps) => {
  const question = state.entities.questions[ownProps.questionId];
  const author = state.entities.users[question.author_id];
  return ({
    question,
    author
  });
};

const mdp = (dispatch) => {
  return ({

  });
};

export default connect(msp, mdp)(QuestionsFrontItem);



// const question = this.props.questions[questionId];
// const author = this.props.users[question.author_id];
