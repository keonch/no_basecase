import React from 'react';
import { Link } from 'react-router-dom';
import UserTag from '../users/user_tag';

class QuestionsIndexItem extends React.Component {

  redirectEdit() {
    return(
      ""
    );
  }

  renderDelete() {
    return (
      this.props.isOwner ?
      <div className='user-buttons'>
        <button
          className='user-buttons-edit'
          onClick={() => this.redirectEdit()}>
          Edit
        </button>

        <button
          className='user-buttons-delete'
          onClick={() => this.props.deleteQuestion(this.props.question.id)}>
          Delete
        </button>
      </div>
      :
        null
    );
  }

  render() {
    return (
      <div className='q-item'>

        <div className='q-stat'>
          <div className='q-votes'>
            <p className='q-votes-number'>{this.props.question.votes}</p>
            <p className='q-votes-label'>votes</p>
          </div>

          <div className='q-answers'>
            <p className='q-answers-number'>{this.props.question.answersCount}</p>
            <p className='q-answers-label'>answers</p>
          </div>
        </div>

        <div className='q-content'>
          <div className='q-title'>
            <Link
              className='q-title-link'
              to={`/questions/${this.props.question.id}`}>
              {this.props.question.title}
            </Link>
          </div>

          <div className='q-body'>{this.props.question.body}</div>

          { this.renderDelete() }

          <UserTag
            contentType='question'
            author={this.props.author}
            time={this.props.question.created_at }/>
        </div>
      </div>
    );
  }
}

export default QuestionsIndexItem;
