import React from 'react';
import Author from '../users/author_container';
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
      <li>
        <i
          onClick={() => this.handleVote('up')}
          className='upvote fas fa-caret-up'/>
        <div>{this.props.answer.votes}</div>
        <i
          onClick={() => this.handleVote('down')}
          className='downvote fas fa-caret-down'/>
        <Quill
          readOnly
          modules={{ toolbar: null }}
          value={this.props.answer.body}/>
        {
          this.props.isAuthor &&
          <div>
            <Link
              to={
                `${this.props.questionId}/edit/${this.props.answerId}`
              }>Edit
            </Link>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        }
        <Author
          verb='answered'
          authorId={this.props.answer.authorId}
          createdAt={this.props.answer.createdAt}/>
      </li>
    );
  }
}
