import React from 'react';
import Quill from 'react-quill';

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleBodyChange(value) {
    this.setState({ body: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postQuestion(this.state)
    .then((questionId) => {
      this.props.history.push(`/questions/${questionId}`);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          placeholder="What's your programming question? Be specific."
          className='title'
          value={this.state.title}
          onChange={this.handleTitleChange}/>

        <Quill
          value={this.state.body}
          onChange={this.handleBodyChange}/>

        <input type='submit' value='Post Your Question'/>
      </form>
    );
  }
}
