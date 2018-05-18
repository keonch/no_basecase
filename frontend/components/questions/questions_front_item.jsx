import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserTag from '../users/user_tag';
import Moment from 'react-moment';

class QuestionsFrontItem extends React.Component {
  answerClass() {
    if (this.props.question.answersCount > 0) {
      return "front-answers-green";
    } else {
      return "front-answers";
    }
  }

  render() {
    return (
      <div className='front-item'>

        <div className='front-stat'>
          <div className='front-votes'>
            <p className='front-votes-number'>{this.props.question.votes}</p>
            <p className='front-votes-label'>votes</p>
          </div>

          <div className={this.answerClass()}>
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
export default QuestionsFrontItem;
