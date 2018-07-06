import React from 'react';
import Author from '../users/author_container';
import AnswerEditForm from '../forms/answer_edit_form_container';
import Quill from 'react-quill';
import { Link } from 'react-router-dom';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteAnswer(this.props.questionId, this.props.answerId);
  }

  render() {
    return (
      <div>
        <Quill
          readOnly
          modules={{toolbar: null}}
          value={this.props.answer.body}/>
        {
          this.props.isAuthor &&
          <div>
            <Link to={`${this.props.questionId}/edit/${this.props.answerId}`}>Edit</Link>
            <div onClick={this.handleDelete}>Delete</div>
          </div>
        }
        <Author
          verb='answered'
          authorId={this.props.answer.authorId}
          createdAt={this.props.answer.createdAt}/>
      </div>
    );
  }
}
