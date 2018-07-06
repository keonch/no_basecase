import React from 'react';
import Author from '../users/author_container';
import AnswerEditForm from '../forms/answer_edit_form_container';
import Quill from 'react-quill';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleForm() {
    this.setState({showForm: !this.state.showForm});
  }

  handleDelete() {
    this.props.deleteAnswer(this.props.questionId, this.props.answerId);
  }

  renderAnswer() {
    return (
      <div>
        <Quill
          readOnly
          modules={{toolbar: null}}
          value={this.props.answer.body}/>
        {
          this.props.isAuthor &&
          <div>
            <div onClick={this.toggleForm}>Edit</div>
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

  render() {
    return (
      <div>
        {
          this.state.showForm ? (
            <AnswerEditForm
              toggleForm={this.toggleForm}
              questionId={this.props.questionId}
              answer={this.props.answer}/>
          ) : (
            this.renderAnswer()
          )
        }
      </div>
    );
  }
}
