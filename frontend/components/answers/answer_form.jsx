import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(value) {
    this.setState({body: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const answer = Object.assign({}, this.state);
    this.props.submitAnswer(this.props.questionId, answer);
    this.setState({body: ''});
  }

  render () {
    const toolbarOptions = [
      ['bold', 'italic'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'header': [1, 2, false] }]
    ];
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Your Answer</p>

          <ReactQuill
            value={this.state.body}
            onChange={this.updateBody}
            modules={ { toolbar: toolbarOptions } }
            className='question-form-body' />

          <ReactQuill
            value={this.state.body}
            modules={ { toolbar: null } }
            readOnly
            className='question-form-preview' />

          <button
            type='submit'
            className='q-submit-answer'>
            Post Your Answer
          </button>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
