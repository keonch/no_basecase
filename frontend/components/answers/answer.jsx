import React from 'react';
import Author from '../users/author';
import AnswerEditForm from '../forms/answer_edit_form_container';
import Quill from 'react-quill';
import { Link } from 'react-router-dom';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleDelete() {
    this.props.deleteAnswer(this.props.questionId, this.props.answerId);
  }

  handleVote(direction) {
    if (direction === 'up') {
      this.props.upvoteAnswer(
        this.props.questionId,
        this.props.answerId
      );
    } else {
      this.props.downvoteAnswer(
        this.props.questionId,
        this.props.answerId
      );
    }
  }

  render() {
    return (
      <li className='answer show-item'>
        <div className='show-votes'>
          <i
            onClick={() => this.handleVote('up')}
            className='upvote fas fa-caret-up'/>
          <div className='answer-count'>{this.props.answer.votes}</div>
          <i
            onClick={() => this.handleVote('down')}
            className='downvote fas fa-caret-down'/>
        </div>

        <Quill
          className='show-body'
          readOnly
          modules={{ toolbar: null }}
          value={this.props.answer.body}/>

        <div className='show-info'>
          <Author
            verb='answered'
            showAvatar
            author={this.props.author}
            createdAt={this.props.answer.createdAt}/>
          {
            this.props.isAuthor &&
            <div className='author-actions'>
              <Link
                to={
                  `${this.props.questionId}/edit/${this.props.answerId}`
                }
                className='author-actions'>
                Edit
              </Link>
              <button
                className='author-actions'
                onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          }
        </div>
      </li>
    );
  }
}
