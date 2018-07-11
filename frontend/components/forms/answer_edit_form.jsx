import React from 'react';
import Quill from 'react-quill';
import { Link, Redirect } from 'react-router-dom';
import { toolbarOptions } from '../../utils/quill_toolbar_options';

export default class AnswerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.answer.body,
      loaded: props.loaded,
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.props.fetchAnswer(
        this.props.questionId,
        this.props.answerId
      ).then(() => this.setState({
        body: this.props.answer.body,
        loaded: true
      }));
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.answer.authorId !== props.currentUser.id) {
      return { redirect: true };
    }

    return null;
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
    ).then(() => this.setState({ redirect: true }));
  }

  render() {
    if (!this.state.loaded) {
      return <div></div>;
    } else if (this.state.redirect) {
      return <Redirect to={`/questions/${this.props.questionId}`}/>;
    }

    return (
      <form
        className='answer-edit-form'
        onSubmit={this.handleSubmit}>
        <Link
          className='title'
          to={`/questions/${this.props.questionId}`}>
          {this.props.question.title}
        </Link>

        <Quill
          readOnly
          modules={{ toolbar: null }}
          className='show-body'
          value={this.props.question.body}/>

        <h2>Answer</h2>
        <Quill
          value={this.state.body}
          modules={{ toolbar: toolbarOptions }}
          className='answer-form'
          onChange={this.handleChange}/>

        <div className='answer-buttons'>
          <input type='submit' value='Edit Answer'/>
          <Link
            className='cancel-btn'
            to={`/questions/${this.props.questionId}`}>
            cancel
          </Link>
        </div>
      </form>
    );
  }
}
