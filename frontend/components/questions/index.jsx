import React from 'react';

class QuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render () {
    const questions = this.props.questions.map((question, idx) => {
      return (
        <li key={idx}>
          { question }
        </li>
      );
    });

    return (
      <ul>
        { questions }
      </ul>
    );
  }
}

export default QuestionsIndex;
