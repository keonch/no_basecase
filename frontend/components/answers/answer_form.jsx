import React from 'react';
import { Link } from 'react-router-dom';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(e) {
    this.setState({"body": e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const answer = Object.assign({}, this.state);
    this.props.submitAnswer(this.props.questionId, answer);
    this.setState({body: ''});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Your Answer</h3>
          <textarea onChange={this.updateBody} value={this.state.body}></textarea>
          <input type='submit' value='Post Your Answer'></input>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
