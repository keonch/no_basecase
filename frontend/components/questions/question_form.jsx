import React from 'react';

class QuestionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.submitQuestion(question);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type='text' value={this.state.title} onChange={this.update('title')} placeholder="What's your programming question? Be specific."></input>

          <textarea></textarea>

          <div>{this.state.body}</div>

          <label>Tags</label>
          <input type='text' placeholder='coming soon!'></input>

          <input type='submit' value='Post Your Question' />
        </form>
      </div>
    );
  }
}

export default QuestionForm;
