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
      <li>
        <Quill
          readOnly
          modules={{ toolbar: null }}
          value={this.props.answer.body}/>
        {
          this.props.isAuthor &&
          <div>
            <button onClick={this.handleEdit}>Edit</button>
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
