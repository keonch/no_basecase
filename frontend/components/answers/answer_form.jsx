import React from 'react';
import { Link } from 'react-router-dom';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    return (
      ''
    );
  }

  render () {
    return (
      <div>
        <form>
          <h3>Your Answer</h3>
          <textarea></textarea>
          <input type='submit' value='Post Your Answer'></input>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
