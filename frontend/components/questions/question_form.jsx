import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

class QuestionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(value) {
    this.setState({ body: value });
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.submitQuestion(question).then((payload) => {
      return (
        this.props.history.push(`/questions/${payload.question.id}`)
      );
    });
  }

  render () {
    const toolbarOptions = [
      ['bold', 'italic'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'header': [1, 2, false] }]
    ];

    return (
      <div className='question-form'>
        <form onSubmit={this.handleSubmit} className='question-form-content'>

          <div className='question-form-title-field'>
            <label className='question-form-title'>Title</label>
            <input
              type='text'
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="What's your programming question? Be specific."
              className='question-form-title-input'>
            </input>
          </div>

          <div className='question-form-body-field'>
            <ReactQuill
              theme="snow"
              value={this.state.body}
              onChange={this.updateBody}
              modules={ { toolbar: toolbarOptions } }
              className='question-form-body' />

          </div>

          <div className='question-form-tag-field'>
            <label className='question-form-tags'>Tags</label>
            <input
              type='text'
              placeholder='at least one tag such as (xml arrays c), max 5 tags'
              className='question-form-tag-input'></input>
          </div>

          <div className="tag-suggestions">
          </div>

          <input
            type='submit'
            value='Post Your Question'
            className='question-form-submit' />

        </form>
      </div>
    );
  }
}

export default withRouter(QuestionForm);
