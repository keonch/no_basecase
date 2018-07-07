import React from 'react';
import Quill from 'react-quill';

export default class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      sessionError: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.postAnswer(
        this.props.questionId,
        {body: this.state.body}
      ).then(() => this.setState({ body: '' }));
    } else {
      this.setState({
        sessionError: 'To answer a question, you must either sign up for an account or log in.'
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Your Answer</div>
        <Quill
          value={this.state.body}
          onChange={this.handleChange}/>
        {
          !this.props.currentUser &&
          <div>
            <a href='#/signup'>Sign up </a>
            or
            <a href='#/login'> log in</a>
          </div>
        }
        <div>{this.state.sessionError}</div>
        <input
          type='submit'
          value='Post Your Answer'/>
      </form>
    );
  }
}
