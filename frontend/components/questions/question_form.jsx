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
        this.props.history.push(`${payload.question.id}`)
      );
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type='text' value={this.state.title} onChange={this.update('title')} placeholder="What's your programming question? Be specific."></input>

          <textarea value={this.state.body} onChange={this.update('body')}></textarea>

          <div>{this.state.body}</div>

          <label>Tags</label>
          <input type='text' placeholder='coming soon!'></input>

          <input type='submit' value='Post Your Question' />
        </form>
      </div>
    );
  }
}

export default withRouter(QuestionForm);
