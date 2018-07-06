import React from 'react';
import Quill from 'react-quill';

export default class AnswerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.answer.body
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({body: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const toggleForm = this.props.toggleForm;
    this.props.updateAnswer(this.props.questionId, {
      id: this.props.answer.id,
      body: this.state.body
    }).then(() => {
      toggleForm();
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Quill
          value={this.state.body}
          onChange={this.handleChange}/>
        <input type='submit' value='Edit Answer'/>
        <div onClick={this.props.toggleForm}>Discard</div>
      </form>
    );
  }
}
