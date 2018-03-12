import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div className='question-form'>
        <form onSubmit={this.handleSubmit} className='content'>

          <div className='title-field'>
            <label className='label'>Title</label>
            <input
              type='text'
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="What's your programming question? Be specific."
              className='input'>
            </input>
          </div>

          <div className='body-field'>
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
              className='body'></textarea>

            <div className='preview'>{this.state.body}</div>
          </div>

          <div className='tag-field'>
            <label className='label'>Tags</label>
            <input
              type='text'
              placeholder='coming soon!'
              className='input'></input>
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
