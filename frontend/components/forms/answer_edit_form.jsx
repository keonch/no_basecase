import React from 'react';
import Quill from 'react-quill';
import { Redirect } from 'react-router-dom';

export default class AnswerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.answer.body,
      loaded: props.loaded
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  componentDidMount() {
    if (!!this.props.currentUser && !this.state.loaded) {
      this.props.fetchAnswer(
        this.props.questionId,
        this.props.answerId
      ).then(() => this.setState({
        body: this.props.answer.body,
        loaded: true
      }));
    }
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateAnswer(
      this.props.questionId,
      this.props.answerId,
      { body: this.state.body }
    ).then(() => this.props.history.push(
      `questions/${this.params.questionId}`
    ));
  }

  handleDiscard() {
    console.log('discarding');
    debugger
    this.props.history.replace(`questions/${this.props.questionId}`);
  }

  checkUser() {
    console.log('checked user');
    if (this.props.currentUser.id !== this.props.answer.authorId) {
    }
  }

  render() {
    if (!this.state.loaded) return <div>Loading</div>;

    return (
      <form onSubmit={this.handleSubmit}>
        <Quill value={this.state.body} onChange={this.handleChange}/>
        <input type='submit' value='Edit Answer'/>
        <div onClick={this.handleDiscard}>Discard</div>
      </form>
    );
  }
}
