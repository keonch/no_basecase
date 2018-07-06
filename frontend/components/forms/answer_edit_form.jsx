import React from 'react';
import Quill from 'react-quill';
import { Redirect } from 'react-router-dom';

export default class AnswerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.answer.body
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!!this.props.currentUser && !this.props.answer) {
      this.props.fetchAnswer(this.props.questionId, this.props.answerId)
      .then(() => this.setState({ body: props.answer.body }));
    }
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateAnswer(this.props.questionId, {
      id: this.props.answerId,
      body: this.state.body
    }).then(() => {
    });
  }

  render() {
    if (!this.props.currentUser) return <div>Unauthorized</div>
    return (
      <form onSubmit={this.handleSubmit}>
        <Quill
          value={this.state.body}
          onChange={this.handleChange}/>
        <input type='submit' value='Edit Answer'/>
        <div>Discard</div>
      </form>
    );
  }
}
