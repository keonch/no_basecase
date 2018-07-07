import React from 'react';
import Quill from 'react-quill';
import { Link, Redirect } from 'react-router-dom';

export default class AnswerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.question.body,
      loaded: props.loaded,
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.props.fetchQuestion(this.props.questionId)
      .then(() => this.setState({
        body: this.props.question.body,
        loaded: true
      }));
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.question.authorId !== props.currentUser.id) {
      return { redirect: true };
    }
    return null;
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateQuestion(
      this.props.questionId,
      { body: this.state.body }
    ).then(() => this.setState({ redirect: true }));
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading</div>;
    } else if (this.state.redirect) {
      return <Redirect to={`/questions/${this.props.questionId}`}/>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div>{this.props.question.title}</div>
        <Quill
          value={this.state.body}
          onChange={this.handleChange}/>
        <input type='submit' value='Edit Question'/>
        <Link to={`/questions/${this.props.questionId}`}>Discard</Link>
      </form>
    );
  }
}
