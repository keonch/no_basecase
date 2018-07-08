import React from 'react';
import { Link } from 'react-router-dom';

export default class QuestionsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render() {
    return (
      <div>
        From questions index
        <Link to='questions/ask'>Ask Question</Link>
      </div>
    )
  }
}
